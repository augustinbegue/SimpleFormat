
var ishtmlHidden = false;
var htmlContent = "";
$(".format").hide();

// Head 1 Button
function head1() {
  insertHtml('<h1 id="selected">Title</h1>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('head1');
  text();
}

// Head 2 Button
function head2() {
  insertHtml('<h3 id="selected">Title 2</h3>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('head2');
  text();
}

// Bold Button
function bold() {
  insertHtml('<b id="selected">bold</b>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('bold');
  text();
}

// Italic Button
function italic() {
  insertHtml('<i id="selected">italic</i>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('italic');
  text();
}

// Underline button
function underline() {
  insertHtml('<u id="selected">underline</u>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  text();
}

// Code block Button
function code() {
  insertHtml('<code id="selected">code</code>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('code');
  text();
}

// Quote block Button
function quote() {
  insertHtml('<blockquote id="selected">quote</blockquote><br>');
  SelectText('selected');
  $('#selected').removeAttr('id');
  console.log('quote');
  text();
}

// Link Button
function link() {
  var url = prompt('Url :');
  var title = prompt('Title :');
  insertHtml('<a href="' + url + '">' + title + '</a>');
  text();
}

// Image Button
function image() {
  var url = prompt('Url :');
  var alt = prompt('Title :');
  var width = prompt('Width :');
  var height = prompt('Height :');
  if (width === null || undefined) {
    width = 'auto'
  }
  if (height === null || undefined) {
    height = 'auto'
  }
  insertHtml('<img src="' + url + '" alt="' + alt + '" height="' + height + '" width="' + width + '">');
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
  $("#underline").attr("disabled", true);
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
  $("#underline").attr("disabled", false);
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

function insertHtml(html) {
    var sel, range;
    if (window.getSelection) {

        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);

            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {

        document.selection.createRange().pasteHTML(html);
    }
}
