goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__28543 = (new Array((cap + (1))));
(G__28543[(0)] = (0));

return G__28543;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__28561 = p;
j__$1 = G__28561;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_28569 = (1);
while(true){
var l_28570 = (j_28569 << (1));
if((l_28570 < s)){
var x_28572 = (heap[j_28569]);
var y_28573 = (heap[l_28570]);
var r_28574 = (l_28570 + (1));
if((r_28574 < s)){
var z_28576 = (heap[r_28574]);
if((y_28573 < z_28576)){
if((z_28576 < x_28572)){
(heap[r_28574] = x_28572);

(heap[j_28569] = z_28576);

var G__28578 = r_28574;
j_28569 = G__28578;
continue;
} else {
}
} else {
if((y_28573 < x_28572)){
(heap[l_28570] = x_28572);

(heap[j_28569] = y_28573);

var G__28580 = l_28570;
j_28569 = G__28580;
continue;
} else {
}
}
} else {
if((y_28573 < x_28572)){
(heap[l_28570] = x_28572);

(heap[j_28569] = y_28573);

var G__28582 = l_28570;
j_28569 = G__28582;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
