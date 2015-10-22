import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

$('.bio').on('click', function(){
	$(this).removeClass('border').addClass('selected');
});