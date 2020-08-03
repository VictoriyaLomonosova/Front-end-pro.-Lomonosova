// 3 задание
let k = +prompt("Ведите число k");
let l = +prompt("Ведите число l");
let m = +prompt("Ведите число m");
if ((l < k && k < m) || (m < k && k < l)) alert(k);
if ((k < l && l < m) || (m < l && l < k)) alert(l);
if ((k < m && m < l) || (l < m && m < k)) alert(m);
