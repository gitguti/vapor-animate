import { Application } from '@splinetool/runtime';
import SplitType from 'split-type';
import gsap from "gsap";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/YNtdvOeSEgRGCOQs/scene.splinecode');

const headline = new SplitType('h1');
const text = new SplitType('p', {charClass: 'char2'})
var tl = gsap.timeline({default: {ease:'ease-in'}});
tl.from('.char', {
  y: -300,
  stagger:0.03,
  delay:0.5
})

.from('p', {
opacity:0
}, "-=1.2")
.to('h1,p', {
  y: 60,
  delay:.4,
  duration:1.3
},"-=2")

.to("#buttonGroup", { opacity: 1, delay: 4});