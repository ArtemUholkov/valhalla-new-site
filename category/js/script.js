var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);

// const catSelection = document.querySelector('.categories_selection');
// window.addEventListener('load', function (event) {
//   var targetClassName = 'flex-wrap-anim';
//   var defaultDuration = '0.3s';

//   var dummyList = [];
//   function addDummy(item, duration) {
//     var top = item.offsetTop;
//     var left = item.offsetLeft;
//     setTimeout(function () {
//       item.style.position = 'absolute';
//       item.style.top = top + 'px';
//       item.style.left = left + 'px';

//       var dummyDiv = document.createElement('div');
//       dummyDiv.classList.add(targetClassName + '-dummy');
//       var rect = item.getBoundingClientRect();
//       dummyDiv.style.width = rect.width + 'px';
//       dummyDiv.style.height = rect.height + 'px';
//       dummyDiv.style.visibility = 'hidden';
//       dummyDiv['__' + targetClassName + '_pair'] = item;
//       dummyDiv['__' + targetClassName + '_duration'] = duration;
//       item.parentNode.appendChild(dummyDiv);
//       dummyList.push(dummyDiv);
//     }, 0);
//   }

//   var conts = document.getElementsByClassName(targetClassName);
//   for (var i = 0, max = conts.length; i < max; i++) {
//     var cont = conts[i];
//     cont.style.position = 'relative';
//     var duration = cont.getAttribute('data-duration') || defaultDuration;
//     var items = cont.getElementsByTagName('div');
//     for (var i = 0, max = items.length; i < max; i++) {
//       addDummy(items[i], duration);
//     }
//   }

//   window.addEventListener('resize', function (event) {
//     dummyList.forEach(function (dummyDiv) {
//       var item = dummyDiv['__' + targetClassName + '_pair'];
//       var duration = dummyDiv['__' + targetClassName + '_duration'];
//       if (item.offsetTop != dummyDiv.offsetTop) {
//         item.style.transition = 'all ' + duration;
//         item.style.top = dummyDiv.offsetTop + 'px';
//         item.style.left = dummyDiv.offsetLeft + 'px';
//       } else {
//         item.style.transition = '';
//         item.style.left = dummyDiv.offsetLeft + 'px';
//       }
//     });
//   });
// });

const openClose = document.querySelector('.categories_select-openclose');
const categoriesSelection = document.querySelector('.categories_products');
openClose.addEventListener('click', () => {
  openClose.classList.toggle('open-menu');
  categoriesSelection.classList.toggle('menu_is_opened');
});
