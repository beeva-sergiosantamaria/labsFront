class ToolParser {
	/**
	 * Define class attributes and split input into lines.
	 */
	constructor(input) {
		this.tool = {
			title: "",
			sections: []
		};

		this.lines = [];
		let raw_ln = input.split("\n");
		if (raw_ln.length) {
			this.lines = raw_ln.filter( (ln) => ln.trim() != "" );
		}
	}

	/**
	 * Call ToolParser methods to parse input lines and transform into
	 * estructured data, and then return the results into an object.
	 */
	parse() {
		this.extractTitle();
		this.extractSections();
		this.clustering();

		return this.tool;
	}

	/**
	 * extractTitle Detects Tool title and delete title line from lines to 
	 * continue parsing. Stores title into result object.
	 */
	extractTitle() {
		let rgx = /^#{1}\s?(\w+)/g;
		let title = rgx.exec(this.lines[0]);
		if (title) {
			this.tool.title = title[1];
			this.lines.splice(0, 1);
		}
	}

	/**
	 * extractSections iterate over the rest of the lines and create sections
	 * when detect section title. Then iterate until match other section title
	 * parsing each mid line according to it format or type. Store sections 
	 * into result object.
	 */
	extractSections() {
		let section = {};
		let codeblock = false;
		this.lines.forEach(line => {
			if (line.startsWith("##")) {
				if (Object.keys(section).length > 0) this.tool.sections.push(section);

				section = {
					title: line.substring(2).trim(),
					content: []
				}
			} else if (line.startsWith("```")) { 
				codeblock = !codeblock;
			} else {
				let parsedline = this.parseLine(line, codeblock);
				section.content.push(parsedline);
			}
		});
	}

	/**
	 * parseLine detects provided line type between `code`, `text`, `link` or 
	 * `list` and format it into object. The result object is returned.
	 */
	parseLine(line, isCode) {
		let l = { type: "text", content: line.trim() };

		let rgx = /\-[\ ]?\[(.+)\]\((.+)\)/g;
		let link = rgx.exec(line);

		rgx = /[\-|0-9][\ |.]?(.+)/g;
		let li = rgx.exec(line);

		if (isCode) {
			l = {
				type: "code",
				content: line
			}
		} else if (link) {
			l = {
				type: "link",
				href: link[2].trim(),
				title: link[1].trim()
			};
		} else if (li) {
			l = {
				type: "list",
				content: li[1].trim()
			};
		}

		return l;
	}

	/**
	 * clustering checks all codelines together and join all into a block
	 * of code lines.
	 */
	clustering() {
		this.tool.sections.forEach((section, index) => {
			let start = -1;
			let end = -1;
			let cluster = {
				items: []
			}

			let new_content = section.content.slice(0);
			section.content.forEach((line, index) => {
				if (line.type == "code" || line.type == "list") {
					if (start == -1) {
						start = index;
						cluster.type = line.type;
					}
					end = index;

					cluster.items.push(line.content);

					if (index == section.content.length - 1) {
						new_content[start] = Object.assign({}, cluster);
						new_content.splice(start + 1, end - start);

						start = -1;
						end = -1;
						cluster.items = [];
					}
				} else {
					if (start != -1) {
						new_content[start] = Object.assign({}, cluster);
						new_content.splice(start + 1, end - start);

						start = -1;
						end = -1;
						cluster.items = [];
					}
				}
			});

			this.tool.sections[index].content = new_content;
		});
	}
}

class GitHubReader {
	constructor(owner, repo) {
		this.endpoint = `https://api.github.com/repos/${ owner }/${ repo }`;
	}

	readFrom(path, callback, error) {
		let uri = `${ this.endpoint }/contents/${ path }`;
		fetch(uri)
			.then(res => res.json())
			.then(json => this.proccessPath(json, callback, error))
			.catch(err => error(err));
	}

	proccessPath(data, callback, error) {
		let index = data.filter(item => item.type === "file");
		if (index.length) {
			index.forEach((item) => {
				fetch(item.download_url)
					.then(res => res.text())
					.then(post => callback(post))
					.catch(error);
			});
		} else {
			error("This path does not contain any post...");
		}
	}
}

let reader = new GitHubReader("beeva-labs", "labs-knowledge");

let tools = [];
reader.readFrom("data/tools/Quantum-computing", tool => {
	let parser = new ToolParser(tool);
	console.log(parser.parse());
	//this.index.push(post);
}, err => {
	console.error(err);
});

/*document.getElementById("input").innerHTML = input;

let p = new ToolParser(input);
let tool = p.parse();

let res = JSON.stringify(tool, null, 4);
document.getElementById("result").innerHTML = res;*/