
var ishtmlHidden = false;
var htmlContent = "";
$(".format").hide();
document.getElementById('editor').contentEditable='true';

// Head 1 Button
function head1() {
  $("#editor").append('<h1 id="selected">Title</h1>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('head1');
  text();
}

// Head 2 Button
function head2() {
  $("#editor").append('<h3 id="selected">Title 2</h3>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('head2');
  text();
}

// Bold Button
function bold() {
  $("#editor").append('<b id="selected">bold</b>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('bold');
  text();
}

// Italic Button
function italic() {
  $("#editor").append('<i id="selected">italic</i>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('italic');
  text();
}

// Code block Button
function code() {
  $("#editor").append('<code id="selected">code</code>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('code');
  text();
}

// Quote block Button
function quote() {
  $("#editor").append('<blockquote id="selected">quote</blockquote><br>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('quote');
  text();
}

// Add space to delimit tags (bold & italic)
function text() {
  $("#editor").append('&nbsp;');
}

function displayhtml() {
  document.getElementById('htmlButton').innerHTML = '<span class="icon"><i class="fas fa-terminal"></i></span>';
  document.getElementById('htmlButton').onclick = hidehtml;
  codeToHTML()
  ishtmlHidden = false;
}
function hidehtml() {
  document.getElementById('htmlButton').innerHTML = '<span class="icon"><i class="fas fa-eye"></i></span>';
  document.getElementById('htmlButton').onclick = displayhtml;
  htmlToCode()
  ishtmlHidden = true;
}

function trash() {
  document.getElementById('editor').innerHTML = '';
  console.log('trash');
}

function htmlToCode() {
  htmlContent = $("#editor").html();
  htmlContent = $("#editor").text(htmlContent).html();
  document.getElementById('editor').innerHTML = htmlContent;
}

function codeToHTML() {
  htmlContent = $("#editor").html();
  htmlContent = $("<div/>").html(htmlContent).text();
  document.getElementById('editor').innerHTML = htmlContent;
}

function SelectText(element) {
 var doc = document
  , text = doc.getElementById(element)
  , range, selection
 ;
 if (doc.body.createTextRange) {
  range = document.body.createTextRange();
  range.moveToElementText(text);
  range.select();
 } else if (window.getSelection) {
  selection = window.getSelection();
  range = document.createRange();
  range.selectNodeContents(text);
  selection.removeAllRanges();
  selection.addRange(range);
 }
}
