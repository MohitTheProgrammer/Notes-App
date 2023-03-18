//hamburger
function toggleFunc(argument) {
	document.querySelector('.form').classList.toggle('toggle');
	document.querySelector('.log').classList.toggle('logo');
}

let button = document.querySelector('.button');
function addNote(argument) {
	let addtext = document.getElementById('addtext');
	let notes = localStorage.getItem('notes');
	if(notes == null){
		notes = [];
	}else{
		notes = JSON.parse(notes)
	}
	notes.push(addtext.value);
	localStorage.setItem('notes', JSON.stringify(notes));
	addtext.value='';
	showNotes();
}
	
function showNotes(query) {
 //  let notes = localStorage.getItem('notes');
	// if(notes == null){
	// 	notes = [];
	// }else{
	// 	notes = JSON.parse(notes)
	// };

	let notes = JSON.parse(localStorage.getItem('notes') || '[]')

    // let notes = allNotes.filter(note => !query || note.includes(query));

 	// for(let i = 0; i < allNotes.length; i++) {

 	// 	if(!query || allNotes[i].includes(query)) { // 
 	// 		notes.push(allNotes[i]);
 	// 	}
 	// }

	let html = '';
	notes.forEach(function(element, index) {
		html += `
         <div class="my-2 mx-2 card" style="width:auto; display: ${!query || element.includes(query) ? 'block' : 'none'}">
         <img src="https://source.unsplash.com/200x200/?${element}&sig=${index}" width="140px" height="80px" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Note ${index +1}</h5>
         <p id="noteCont" class="card-text">${element}</p>
         <button onclick="deleteNote(${index})" class="btnn">Delete</button>
         </div>
         </div>`
	});
		
 	let displayDiv = document.getElementById('notes-div');
	if(notes.length > 0){
	 	displayDiv.innerHTML = html;
	 }
	 else{
	 	displayDiv.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
	 }
}
	
function deleteNote(index) {
	console.log(index);
	let notes = localStorage.getItem('notes');
	if(notes == null){
		notes = [];
	}else{
		notes = JSON.parse(notes)
	}
	notes.splice(index, 1);
	localStorage.setItem('notes', JSON.stringify(notes));
	showNotes();
} 
showNotes();

function searchNote(argument) {

	 	let query = document.getElementById('search-bar').value;
	 	showNotes(query);
} 	
		
		


	


 	
