/* -----
 * Scroll based events
 * -----
 */
// maintaining a story map, associating the keyword to the set of stories to open
const story_map = {
  0: {'index': '0', 'year': '2008', 'content': 'The invasion of Afghanistan was justified in the name of women\'s rights - Laura Bush in her statement, "the brutal oppression of women," calling this oppression "a central goal of the terrorists" with whom the United States was now at war.'},
  1: {'index': '1', 'year': '2008', 'content': 'The 2004 inquiry led to the establishment of the Department of Defense Sexual Assault Prevention and Response Office (SAPRO). In addition to serving as a central point for training, resources, and implementation of policy within each branch of the armed services, SAPRO tracks reports of sexual assault in each year and releases results from a biannual survey that includes a measure to estimate how many service members experienced sexual assault in a given year.'},
  2: {'index': '2', 'year': '2008', 'content': '<iframe width="100%" src="https://www.youtube.com/embed/fUmP281en24?si=Z9DHz3ivvEc8dfYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>'},
  3: {'index': '3', 'year': '2008', 'content': 'Beth was a logistics officer volunteerly deployed in Afghanisthan on a female engagement team (FET). Her position as a woman within the Green Barrett team was "an invaluable tool" when it came to collecting information from Afghan women about sympathetic residents.'},
  4: {'index': '4', 'year': '2008', 'content': 'Edith, a young Hispanic woman from a poor background, was deployed as a supply clerk. She saw the army as a more meritocratic workplace than the civilian jobs in the US South where she always felt looked down upon. '},
  5: {'index': '6', 'year': 'some year', 'content': 'lorem ipsum doler sit amet'},
  6: {'index': '5', 'year': '2010', 'content': 'The 2010 reforms opened access for veterans (like Edith) who were otherwise denied healthcare, now to be able to make a connection by allowing deployment to a combat zone in any capacity not just combat roles to serve in place of what was before a requirement to prove a specific "event" caused one\'s PTSD.'},
  7: {'index': '7', 'year': '2010', 'content': '<p>However, the reforms did not extend to PTSD claims in which the cause of PTSD is sexual assault.</p><p>When Edith finally did seek mental health services at the VA, the clinician did not believe that she had been in the sort of combat she described. </p>'},
  8: {'index': '8', 'year': '2010', 'content': 'Veteran advocacy groups continue to note in documentation as recent as 2022 the persistent myth among medical service providers that "women do not serve in combat." This translates into higher denial rates of post-traumatic stress disorder (PTSD) diagnosis for women and is thus a barrier to accessing treatment and services.'},
  9: {'index': '9', 'year': '2010', 'content': 'A full 100 percent of households headed by women in Afghanistan went hungry in 2022, including an estimated 2 million widows.'},
  10: {'index': '10', 'year': '2010', 'content': 'The RAND study also found that 10 percent of active-duty service members experienced some form of discrimination that violates the military\'s own equal opportunity program, including sexual harassment, hostile work environment, sexual quid pro quo, or gender-based derogatory comments or mistreatment (26 percent of women and 7.4 percent of men, only 0.01 percent of which were reported.)'},
  11: {'index': '11', 'year': '2010', 'content': 'Human Rights Watch published a report in which it found many victims of sexual assault faced fear of retaliation given that "military service members who reported retaliation were 12 times more likely to suffer retaliation for doing so than to see their offender, if a service member, convicted for a sex offense." The report warned that any gains in reporting would be lost if victims who report their assaults continued to experience retaliation. Sadly, this seems to be the exact pattern that played out over the following 5-6 years, with reporting rates falling gradually after 2016 to 30% in 2018 and more drastically to 20% in 2021'},
  12: {'index': '12', 'year': '2018', 'content': '<p>In 2018, sexual assault prevalence increased by 44 percent among women. More than 20,000 Service members were the victims of sexual assault that year (13,000 women and 7,500 men).</p><p>Fewer than 8,000 per year reported that assault, according to the Department\'s own annual surveys. The sexual harassment numbers are bleaker, with about one in every four active duty women reporting experiences of sexual harassment. Yet DoD received only 1,781 reports of sexual harassment in FY20.</p>'},
  13: {'index': '13', 'year': '2010', 'content': 'The body of Sgt. Elder Fernandes, age 23, was found hanging from a tree outside of the same Fort Hood installation. Fernandes killed himself after he was sexually assaulted by his sergeant, reported the offense, and was retaliated against instead of believed or assisted.'},
  14: {'index': '14', 'year': '2010', 'content': 'The 2022 report (which gives a snapshot of numbers from 2021) was especially concerning in that it showed that "not only is unwanted sexual contact rising, but fewer people are opting to report it, and fewer perpetrators are being legally punished."'},
  15: {'index': '15', 'year': '2010', 'content': 'The "I am Vanessa Guillen Act" (Military Justice Improvement Prevention Act) represents a meaningful shift to remove military commanders from prosecuting military sexual assault, instead using a special council.'},
  16: {'index': '16', 'year': '2010', 'content': 'Pvt. Ana Fernanda Basaldua Ruiz was found dead, also at Fort Hood, in March 2023. Basaldua had also told her family she was being sexually harassed by a superior before her death.'},
  17: {'index': '17', 'year': '2010', 'content': 'NDAA removed important elements of the Act that had passed in the Senate, which would have taken military commanders out of the chain of command and judicial procedures if their subordinate is accused of sexual harassment or assault...'},
  18: {'index': '18', 'year': '2010', 'content': '... this meant that while including important reforms such as making sexual harassment a crime under the UCMJ, the 2022 protections still allowed commanders to choose juries and witnesses, grant or deny witness immunity, and offer their subordinates the option of separating from the military instead of facing justice.'},
}

document.addEventListener('DOMContentLoaded', () => {

  const closeDrawerBtn = document.getElementById('closeDrawer');
  const drawer = document.getElementById('drawer');
  closeDrawerBtn.addEventListener('click', closeDrawer);

  function closeDrawer() {
    drawer.classList.remove('open');
  }

  // given an array of story ids, show all stories in drawer
  function openDrawer(stories) {
    // console.log('drawer openend!!', stories)

    // retrieve story data
    const story_objs = stories.map(index => story_map[index]);
    const story_count = story_objs.length;
    const story_status = document.querySelector('.drawer .drawer-head .status');

    console.log(story_count, story_objs);
    // load these into the dialog

    const drawer_content = document.querySelector('.drawer .drawer-content');
    drawer_content.innerHTML = '';
    const story_content = document.createElement('div');
    story_objs.forEach((story) => {
      story_content.innerHTML = `<span>${story.year}</span>`;
      story_content.innerHTML += `<p>${story.content}</p>`;
    });
    drawer_content.appendChild(story_content);
    
    // set the status of the story counts
    story_status.innerHTML = `Story 1 of ${story_count}`;
  }

  // on loading the page, show section 0 (first section)
  doSomethingForSection0()

  // subsequent sections are loaded when clicking on 'read more...'
  document.addEventListener('click', (event) => {

    if(event.target.tagName == 'A') {
      const anchor = event.target;
      const sectionID = (anchor.getAttribute('id')) ? anchor.getAttribute('id') : false;

      if(sectionID == 'for-1') {
        doSomethingForSection1()
        anchor.remove()
      }
      if(sectionID == 'for-2') {
        doSomethingForSection2()
        anchor.remove()
      }
      if(sectionID == 'for-3') {
        doSomethingForSection3()
        anchor.remove()
      }

      // check if the link clicked is for dialog stories
      if(anchor.classList.contains('link-for-section')) {
        // close existing drawer
        closeDrawer()

        // get associated dialog IDs to highlight
        const dialogIDs = anchor.dataset.dialogs.split(' ')

        drawer.classList.add('open');
        openDrawer(dialogIDs)
      }

      if(anchor.classList.contains('expand-collapse')) {
        anchor.parentElement.parentElement.classList.replace('zoomin', 'zoomout')
      }
    }
  })


  // dialogs.forEach(dialog => {
  //   dialog.addEventListener('click', (event) => {
  //     const target = event.target;

  //     // Check if the click is on the dialog or its children
  //     if(dialog.contains(target)) {
  //       if(target === dialog) {
  //         // console.log(`dialog ${dialog.id} clicked`);
  //       } else {
  //         // console.log(`Child clicked in dialog ${dialog.id}:`, target.textContent);
  //         // zoom-in on the clicked dialog
  //         dialog.classList.replace('zoomout', 'zoomin')
  //         // ... and allow to drag
  //       }
  //     }
  //   });
  // });


  // given a speed, produces typewriting effect on text
  function write(config) {
    const typingSpeed = 10;
    const parent = document.querySelector(config.section)
    const target = document.querySelector(`${config.section} > div`)
    const nextSection = document.getElementById(config.next_section)
    const txt = target.innerHTML.trim()
    let to_print = '', left = 1, top = 5, gap = 15;
    let dontprint = false, speed = typingSpeed;

    parent.classList.remove('invisible')
    target.innerHTML = '' // clear the text first

    function typewriter(elem, i = 0) {
      if(i === 0) { elem.innerHTML = ''; to_print = ''; }

      // if index is a char position to be watched, then...
      // if(i in config.char_positions) {
      //   const d = config.char_positions[i];

        // ...at specific char index, show specific dialogs
        // show_dialog(
        //   d['name'],
        //   (d['left'] != 0) ? d['left'] : left+=gap,
        //   (d['top'] != 0) ? d['top'] : left+=gap,
        // )
      // }
  
      // print individual characters
      to_print += txt[i];
      
      // if any of the tags are identified in the text, flag a `dontprint`
      if(txt[i] == '<' || txt[i] == '>') {
        dontprint = !dontprint
        speed = 0
      }
      
      // if `dontprint` is false, then...
      if(!dontprint) {
        speed = typingSpeed
        elem.innerHTML = to_print
      }
      
      // as soon as the last text is rendered, show the 'read more...' text & stop
      if(i == txt.length - 1) {
        nextSection.classList.remove('invisible')
        return;
      }

      setTimeout(() => typewriter(elem, i + 1), speed)
    }
  
    typewriter(target);
  }

  // loading section 0
  function doSomethingForSection0() {
    write({
      section: '#story0',
      next_section: 'for-1',
      // char_positions: {
      //   310: { name: 'dialog-story0', top: 0, left: 0 },
      //   375: { name: 'dialog-story1', top: 234, left: 365 }
      // } 
    })
  }

  // loading section 1
  function doSomethingForSection1() {
    write({
      section: '#story1',
      next_section: 'for-2',
      // char_positions: {
      //    95: { name: 'dialog-story2', top: 0, left: 0 },
      //   361: { name: 'dialog-story3', top: 0, left: 0 },
      //   420: { name: 'dialog-story4', top: 0, left: 0 },
      //   426: { name: 'dialog-story5', top: 0, left: 0 },
      //   508: { name: 'dialog-story6', top: 0, left: 0 },
      //   512: { name: 'dialog-story7', top: 0, left: 0 }
      // } 
    })
  }

  // loading section 2
  function doSomethingForSection2() {
    write({
      section: '#story2',
      next_section: 'for-3',
      // char_positions: {
      //    95: { name: 'dialog-story9', top: 0, left: 0 },
      //   161: { name: 'dialog-story10', top: 0, left: 0 },
      //   120: { name: 'dialog-story11', top: 0, left: 0 },
      //   130: { name: 'dialog-story12', top: 0, left: 0 },
      //   132: { name: 'dialog-story13', top: 0, left: 0 },
      //   283: { name: 'dialog-story14', top: 0, left: 0 },
      //   285: { name: 'dialog-story15', top: 0, left: 0 },
      //   287: { name: 'dialog-story16', top: 0, left: 0 },
      //   290: { name: 'dialog-story17', top: 0, left: 0 }
      // }
    })
  }

  // loading section 3
  function doSomethingForSection3() {
    const parent = document.querySelector('#story3')
    const target = document.querySelector('#story3 > div')
    parent.classList.remove('invisible');
  }



  /**
   * Drag events
   */
  // const draggables = document.querySelectorAll(".dialog-wrapper");
  // let isDragging = false;
  // let startX, startY, initialX, initialY, currentDraggable;
  // const body = document.querySelector('body');
  // const preventDefault = (e) => e.preventDefault();

  // const findDraggable = (element) => {
  //   // allow dialog to be draggable only when in `zoomin` state
  //   while(element && !element.classList.contains('dialog-wrapper')) {
  //     element = element.parentElement;
  //   }
  //   return element;
  // };

  // const onMouseDown = (e) => {
  //   currentDraggable = findDraggable(e.target);
  //   isDragging = true;
  //   startX = e.clientX;
  //   startY = e.clientY;
  //   initialX = currentDraggable.offsetLeft;
  //   initialY = currentDraggable.offsetTop;
  //   currentDraggable.style.cursor = 'grabbing';

  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  //   document.addEventListener('scroll', preventDefault, { passive: false });
  // }

  // const onMouseMove = (e) => {
  //   if(!isDragging) return;
  //   const dx = e.clientX - startX;
  //   const dy = e.clientY - startY;
  //   currentDraggable.style.left = `${initialX + dx}px`;
  //   currentDraggable.style.top = `${initialY + dy}px`;
  // };

  // const onMouseUp = () => {
  //   isDragging = false;
  //   currentDraggable.style.cursor = 'move';

  //   document.removeEventListener('mousemove', onMouseMove);
  //   document.removeEventListener('mouseup', onMouseUp);
  //   document.removeEventListener('scroll', preventDefault);
  // }

  // for touch devices
  // const onTouchStart = (e) => {
  //   currentDraggable = findDraggable(e.target);
  //   isDragging = true;
  //   const touch = e.touches[0];
  //   startX = touch.clientX;
  //   startY = touch.clientY;
  //   initialX = currentDraggable.offsetLeft;
  //   initialY = currentDraggable.offsetTop;

  //   document.addEventListener('touchmove', onTouchMove, { passive: false });
  //   document.addEventListener('touchend', onTouchEnd);
  //   document.addEventListener('scroll', preventDefault, { passive: false });
  // };

  // const onTouchMove = (e) => {
  //   if(!isDragging) return;
  //   const touch = e.touches[0];
  //   const dx = touch.clientX - startX;
  //   const dy = touch.clientY - startY;
  //   currentDraggable.style.left = `${initialX + dx}px`;
  //   currentDraggable.style.top = `${initialY + dy}px`;
  //   e.preventDefault(); // Prevent scrolling while dragging
  // };

  // const onTouchEnd = () => {
  //   isDragging = false;
  //   document.removeEventListener('touchmove', onTouchMove);
  //   document.removeEventListener('touchend', onTouchEnd);
  //   document.removeEventListener('scroll', preventDefault);
  // };

  // // add the events
  // draggables.forEach((draggable) => {
  //   draggable.addEventListener('mousedown', onMouseDown);
  //   draggable.addEventListener('touchstart', onTouchStart, { passive: false });
  // })

  /**
   * Utility
   * Given a dialog id, unhide the dialog with that id
   * This is a one time function
   */
  // function show_dialog(id, left, top) {
  //   const dialog = document.getElementById(id)
    
  //   if(dialog.classList.contains('invisible')) {
  //     dialog.classList.remove('invisible')
  //     dialog.classList.add('reveal')
  //     dialog.classList.add('zoomout')
  //     dialog.style.top = `${top}px`;
  //     dialog.style.left = `${left}px`;
  //   }
  // }


  /**
   * Utility
   * scroll the page down by `y` pixels vertically
   */
  function scrollDown(by=100) {
    window.scrollBy({
      top: by,
      left: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }

});