let eventscalendar = Vue.component("eventscalendar-component", {
	template: 	`<div class="modal-mask-calendar" id="modal-template-calendar">
					<div class="modal-wrapper-calendar">
						<div class="modal-container-calendar">
                            <div class="closeFileBox">
                                <div v-on:click="$parent.activeCalendar = false" class="closeCalendarButton"><i class="material-icons closeFileIcon">close</i></div>
							</div>	
							<div class="eventsCalendar">
								<div class="calendarTable">
									<div class="calendarHeader">
										<div class="calendarHeaderMonth">{{month + '   ' + year}}</div>
										<i class="material-icons chevronRight" @click="addMonth">chevron_right</i>
										<i class="material-icons chevronLeft" @click="subtractMonth">chevron_left</i>
									</div>
									<ul class="calendarWeekdays">
										<li class="calendarWeekDayText" v-for="day in days">{{ day }}</li>
									</ul>
									<ul class="calendarDates">
										<li class="blackDay" v-for="blank in firstDayOfMonth"></li>
										<li v-for="date in daysInMonth" class="calendarDaysText"
											:class="{'calendarCurrentDay': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
											<span>{{ date }}</span>
										</li>
									</ul>
								</div>
								<div class="calendarEventsList">
									<div class="calendarEventListTitle">Events this Month: </div>
									<div class="calendarEventListBox">
										<div v-for="events in listOfEvents" class="calendarEventInMonth">
											<div class="calendarEventInMonthDate">{{ events.date }}</div>
											<div class="calendarEventInMonthTitle">{{ events.title }}</div>
										</div>
									</div>
								</div>
							</div>
				       	</div>
				    </div>
				</div>`,
	data() {
		return {
			today: moment(),
			dateContext: moment(),
			days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			listOfEvents: [
				{date: '27/07/2018', title:'MeetUp: panorama AR'},
				{date: '31/07/2018', title:'Codemotion: ponencia UX para chatbots'}
			]
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
			return firstDay.weekday();
		},
		initialDate: function () {
			var t = this;
			return t.today.get('date');
		},
		initialMonth: function () {
			var t = this;
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