import { createRouter, createWebHistory } from 'vue-router'
import TemplateSyntaxView from '../views/TemplateSyntaxView.vue'
import MethodsView from '../views/MethodsView.vue'
import ReactivityFundamentalsView from '../views/ReactivityFundamentalsView.vue'
import ComputedPropertiesView from '../views/ComputedPropertiesView.vue'
import ClassAndStyleBindingsView from '../views/ClassAndStyleBindingsView.vue'
import ListRenderingView from '../views/ListRenderingView.vue'
import EventHandlingView from '../views/EventHandlingView.vue'
import FormInputBindingsView from '../views/FormInputBindingsView.vue'
import WatchersView from '../views/WatchersView.vue'
import ComponentsView from '../views/ComponentsView.vue'

// 11. Router 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/templatesyntax",
      name: "templatesyntax",
      component: TemplateSyntaxView
    },
    {
      path: "/methods",
      name: "methods",
      component: MethodsView
    },
    {
      path: "/reactivityfundamentals",
      name: "reactivityfundamentals",
      component: ReactivityFundamentalsView
    },
    {
      path: "/computedproperties",
      name: "computedproperties",
      component: ComputedPropertiesView
    },
    {
      path: "/classandstylebindings",
      name: "classandstylebindings",
      component: ClassAndStyleBindingsView
    },
    {
      path: "/listrendering",
      name: "listrendering",
      component: ListRenderingView
    },
    {
      path: "/eventhandling",
      name: "eventhandling",
      component: EventHandlingView
    },
    {
      path: "/forminputbindings",
      name: "forminputbindings",
      component: FormInputBindingsView
    },
    {
      path: "/watchers",
      name: "watchers",
      component: WatchersView
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView
    },
  ]
})

export default router
