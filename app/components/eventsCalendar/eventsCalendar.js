let eventscalendar = Vue.component("eventscalendar-component", {
	template: 	`<div class="modal-mask-calendar" id="modal-template-calendar">
					<div class="modal-wrapper-calendar">
						<div class="modal-container-calendar">
                            <div class="closeFileBox">
                                <div v-on:click="$parent.activeCalendar = false" class="closeCalendarButton"><i class="material-icons closeFileIcon">close</i></div>
							</div>	
							<div class="eventsCalendar">
								<div class="calendarHeader">
									<i class="material-icons chevronLeft" @click="subtractMonth">chevron_left</i>
									<div class="calendarHeaderMonth">{{month + ' - ' + year}}</div>
									<i class="material-icons chevronRight" @click="addMonth">chevron_right</i>
								</div>
								<ul class="calendarWeekdays">
									<li class="calendarWeekDayText" v-for="day in days">{{ day }}</li>
								</ul>
								<ul class="calendarDates">
									<li class="calendarDaysText blackDay" v-for="blank in firstDayOfMonth"></li>
									<li v-for="date in daysInMonth" class="calendarDaysText"
										:class="{'calendarCurrentDay': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
										<span>{{ date }}</span>
									</li>
								</ul>
							</div>
				       	</div>
				    </div>
				</div>`,
	data() {
		return {
			today: moment(),
			dateContext: moment(),
			days: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
		}
	},
	computed: {
		year: function () {
			var t = this;
			return t.dateContext.format('Y');
		},
		month: function () {
			var t = this;
			return t.dateContext.format('MMMM');
		},
		daysInMonth: function () {
			var t = this;
			return t.dateContext.daysInMonth();
		},
		currentDate: function () {
			var t = this;
			return t.dateContext.get('date');
		},
		firstDayOfMonth: function () {
			var t = this;
			var firstDay = moment(t.dateContext).subtract((t.currentDate - 1), 'days');
			console.log(firstDay);
			return firstDay.weekday();
		},
		initialDate: function () {
			var t = this;
			return t.today.get('date');
		},
		initialMonth: function () {
			var t = this;
			console.log(t.today.format('MMMM'));
			return t.today.format('MMMM');
		},
		initialYear: function () {
			var t = this;
			return t.today.format('Y');
		}
	},
	created: function(done){
	},
	destroyed: function(){
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
			console.log(this.today);
		},
		addMonth: function () {
			var t = this;
			t.dateContext = moment(t.dateContext).add(1, 'month');
		},
		subtractMonth: function () {
			var t = this;
			t.dateContext = moment(t.dateContext).subtract(1, 'month');
		}
	}	
})		