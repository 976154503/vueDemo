import $ from 'jquery'
import './css/style.css'
$(function(){
	$('li:odd').css('backgroundColor','black');
	$('li:even').css('backgroundColor',function(){
		return '#' + 'f40'
	});
})