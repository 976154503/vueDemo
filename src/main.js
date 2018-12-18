import $ from 'jquery'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

class Person {
	static info = { name:'zs', age:20 }
}
console.log(Person.info)
$(function(){
	$('li:odd').css('backgroundColor','black');
	$('li:even').css('backgroundColor',function(){
		return '#' + 'f40'
	});
})