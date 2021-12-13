import Journal from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#text-form').submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const textArray = $('#text').val().split(" ");
    const newJournal = new Journal(textArray, title)
    const numberOfWords = newJournal.numberWords();
    $('#response').html(numberOfWords);
  });
});