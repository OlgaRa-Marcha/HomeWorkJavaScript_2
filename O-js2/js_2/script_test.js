var arr = [];

for (var i=0; i<5; i++) {
	
	arr [i] = prompt ('Введите имя', arr [i])
	
}


// for (var i=0; i<5; i++) {
//	console.log (i);
//	console.log ( 'arr[i]', arr[i]);
	
//}


var arg = prompt("Введите Ваше имя!")

//switch (arg) {
//  case arr[0]:
//     alert ( arg + ', вы успешно вошли.');
//    break;
//  case arr[1]:
//     alert ( arg + ', вы успешно вошли.');
//    break;
 // case arr[2]:
//     alert ( arg + ', вы успешно вошли.');
 //   break;
//  case arr[3]:
 //    alert ( arg + ', вы успешно вошли.');
 //   break;
 // case arr[4]:
 //    alert ( arg + ', вы успешно вошли.');
//    break;
 
 // default:
//   alert ( arg + ', простите, вас нет в списках приглашенных.');
//}


 for (var i=0; i<5; i++) {
	
	if (arg === arr[i]) {
		alert ( arg + ', вы успешно вошли.');
        break;
	} 
	alert ( arg + ', простите, вас нет в списках приглашенных.');
	break;
}
