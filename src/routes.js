import Home from './views/Home.vue';
import Contact from "./components/Contact.vue";
import Slider from "./components/Slider.vue";
import Todo from "./components/Todo.vue";


/* 
	"param" 			:test
				->		$route.params.test;
*/

/* prettier-ignore */
export default [
  { name: "home", path: "/", component: Home },
  { name: "contact", path: "/contact", component: Contact },
  { name: "slider", path: "/slider", component: Slider },
  { name: "todo", path: "/todo", component: Todo },
  // { name: 'not-found' }
];
