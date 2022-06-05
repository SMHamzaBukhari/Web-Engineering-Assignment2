let members4 = document.getElementById('members4');
let members45= document.getElementById('members5');

// ===============================GROUP 4===============================

let grp4 = [{
    name: 'Arzoo Fatima',
    enrollment: '02-131192-032',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Abdullah Iqbal',
    enrollment: '02-131192-076',
    github:'https://github.com/AbdullahIqbal10/Assignment-2-web-engineering',
    live: 'https://abdullahiqbal10.github.io/Assignment-2-web-engineering/'
},{
    name: 'Arshia Naveed',
    enrollment: '02-131192-026',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Shahwaiz Hassan',
    enrollment: '02-131192-006',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
}];

grp4.map((e) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
    const content = `
   <div class="d-flex flex-column align-items-center text-center" >
   <figure class="card-body"> 
       <figcaption><br id="name">${e.name} <br><span class="fs-6" id="enrollment">${e.enrollment}</span> </figcaption>
       <div class="buttons d-flex justify-content-around mt-1">
           <div>
               <span><a class="icons text-white" target="_blank" id="github" href="${e.github}"><i class="fa-brands fa-github"></i></a></span>

           </div>
           <div>
               <span><a class="icons text-white"  target="_blank" id="live"  href="${e.live}"><i class="fa-solid fa-globe"></i></a></span>
           </div>
       </div>
   </figure>
</div>
   `;
    members4.innerHTML += content;
})



// ===============================GROUP 5===============================
let grp5 = [{
    name: 'Hareem Fatima',
    enrollment: '02-131192-020',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Ahmed Bin Alam Rao',
    enrollment: '02-131192-046',
    github:'https://github.com/AbdullahIqbal10/Assignment-2-web-engineering',
    live: 'https://abdullahiqbal10.github.io/Assignment-2-web-engineering/'
},{
    name: 'Sadia Ambreen',
    enrollment: '02-131192-056',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Abdul Rehman',
    enrollment: '02-131192-064',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
}];

grp5.map((e, members5Card) => {
    const card = document.createElement('div');
    card.classList = 'card-body';
    const content = `
   <div class="d-flex flex-column align-items-center text-center" id="${members5Card}">
   <figure class="card-body"> 
       <figcaption><br id="name">${e.name} <br><span class="fs-6" id="enrollment">${e.enrollment}</span> </figcaption>
       <div class="buttons d-flex justify-content-around mt-1">
           <div>
               <span><a class="icons text-white" target="_blank" id="github" href="${e.github}"><i class="fa-brands fa-github"></i></a></span>

           </div>
           <div>
               <span><a class="icons text-white"  target="_blank" id="live"  href="${e.live}"><i class="fa-solid fa-globe"></i></a></span>
               </div>
       </div>
   </figure>
   </div>
   `;

   members5.innerHTML += content;
})