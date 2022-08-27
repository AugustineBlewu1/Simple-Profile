const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controlls');
const sectbtn= document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');



function PageTransitions(){
    //Btn Click Active class
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function() {
            let currentBtn  = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    
    }

    //sections active class
    allSections.addEventListener('click', (e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        
        if(id){
            //remove selected from the other class
            sectbtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            console.log(element)
            element.classList.add('active');
        }

    });


    //Toggle Theme

    const themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', () => {

        let element  = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();

