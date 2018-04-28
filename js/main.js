
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

// Link Button
function link() {
  var url = prompt('Url :');
  var title = prompt('Title :');
  $("#editor").append('<a src="' + url + '">' + title + '</a>');
}

// Image Button
function image() {
  var url = prompt('Url :');
  var alt = prompt('Title :');
  $("#editor").append('<img src="' + url + '" alt="' + alt + '">');
}

function divider() {
  $("#editor").append('<hr/>');
  console.log('divider');
}

// Add space to delimit tags (bold & italic)
function text() {
  $("#editor").append('&nbsp;');
}

function displayhtml() {
  document.getElementById('htmlButton').innerHTML = '<span class="icon"><i class="fas fa-terminal"></i></span>';
  document.getElementById('htmlButton').onclick = hidehtml;
  codeToHTML()
  enableButtons()
  ishtmlHidden = false;
}
function hidehtml() {
  document.getElementById('htmlButton').innerHTML = '<span class="icon"><i class="fas fa-eye"></i></span>';
  document.getElementById('htmlButton').onclick = displayhtml;
  htmlToCode()
  disableButtons()
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

function disableButtons() {
  $("#head1").attr("disabled", true);
  $("#head2").attr("disabled", true);
  $("#bold").attr("disabled", true);
  $("#italic").attr("disabled", true);
  $("#code").attr("disabled", true);
  $("#quote").attr("disabled", true);
  $("#divider").attr("disabled", true);
  $("#link").attr("disabled", true);
  $("#image").attr("disabled", true);
}

function enableButtons() {
  $("#head1").attr("disabled", false);
  $("#head2").attr("disabled", false);
  $("#bold").attr("disabled", false);
  $("#italic").attr("disabled", false);
  $("#code").attr("disabled", false);
  $("#quote").attr("disabled", false);
  $("#divider").attr("disabled", false);
  $("#link").attr("disabled", false);
  $("#image").attr("disabled", false);
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

function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}
