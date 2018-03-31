let teamslide = Vue.component("teamSlide-component", {
	template: 	`<div class="teamBox">
					<div id="labstitle" class="teamTitle">Our team</div>
					<div v-for="item in data" :id="item.name" class="teamPhoto" v-on:mouseover="hoverEffect(item.name)" v-on:mouseleave="leaveEffect(item.name)"><img :src="photoUrl+item.photo"/></div>
				</div>`,
	data() {
		return {
			data: [
				{'name':'Carlos', 'surname': 'Gonzalez', 'desc':'', 'tag':'Machine inteligence', 'photo':'CarlosGonzalez.jpg'},
				{'name':'Enrique', 'surname': 'Otero', 'desc':'', 'tag':'Machine inteligence', 'photo':'EnriqueOtero.png'},
				{'name':'Ira', 'surname': 'Manzano', 'desc':'', 'tag':'Service Design', 'photo':'IraManzano.png'},
				{'name':'Jorge', 'surname': 'Andres', 'desc':'', 'tag':'HCI/UX', 'photo':'JorgeAndres.jpg'},
				{'name':'Paula', 'surname': 'Cordero', 'desc':'', 'tag':'The Boss', 'photo':'PaulaCordero.png'},
				{'name':'Marian', 'surname': 'Moldovan', 'desc':'', 'tag':'HCI/IoT', 'photo':'MarianClaudiu.png'},
				{'name':'Sergio', 'surname': 'Santamaria', 'desc':'', 'tag':'HCI/front', 'photo':'SergioSantamaria.png'},
				{'name':'Jesus', 'surname': 'Martin', 'desc':'', 'tag':'HCI/UX', 'photo':'JesusMartin.jpg'},
				{'name':'Lucas', 'surname': 'Menendez', 'desc':'', 'tag':'Machine inteligence/Blockchain', 'photo':'lucasmenendez.jpg'},
				{'name':'Mario', 'surname': 'Rodriguez', 'desc':'', 'tag':'DevOps/Blockchain', 'photo':'mariorodriguez.jpg'},
				{'name':'Samuel', 'surname': 'Muñoz', 'desc':'', 'tag':'Machine inteligence/Blockchain', 'photo':'samuelmunoz.jpg'},
				{'name':'Fernando', 'surname': 'Cerezal', 'desc':'', 'tag':'Blockchain/IoT', 'photo':'lucasmenendez.jpg'}
			],
			photoUrl: "app/components/teamSlide/photos/"
		}
	},
	methods: {
		hoverEffect: function(id){
			if( $('#'+id).prev()[0] && $('#'+id).prev()[0].id!="labstitle" ) $('#'+id).prev().addClass('teamPhotosides');
			else if( $('#'+id).next()[0] ) $('#'+id).next().addClass('teamPhotosides');
		},
		leaveEffect: function(id){
			if( $('#'+id).prev()[0] ) $('#'+id).prev().removeClass('teamPhotosides');
			else if( $('#'+id).next()[0] ) $('#'+id).next().removeClass('teamPhotosides');	
		}
	}	
})		