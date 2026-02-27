import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  // Atoms
  {
    path: "/components/button",
    name: "button",
    component: () => import("../views/components/ButtonPage.vue"),
  },
  {
    path: "/components/input",
    name: "input",
    component: () => import("../views/components/InputPage.vue"),
  },
  {
    path: "/components/input-range",
    name: "input-range",
    component: () => import("../views/components/InputRangePage.vue"),
  },
  {
    path: "/components/select",
    name: "select",
    component: () => import("../views/components/SelectPage.vue"),
  },
  {
    path: "/components/badge",
    name: "badge",
    component: () => import("../views/components/BadgePage.vue"),
  },
  {
    path: "/components/icon",
    name: "icon",
    component: () => import("../views/components/IconPage.vue"),
  },
  {
    path: "/components/spinner",
    name: "spinner",
    component: () => import("../views/components/SpinnerPage.vue"),
  },
  {
    path: "/components/text",
    name: "text",
    component: () => import("../views/components/TextPage.vue"),
  },
  {
    path: "/components/switch",
    name: "switch",
    component: () => import("../views/components/SwitchPage.vue"),
  },
  {
    path: "/components/textarea",
    name: "textarea",
    component: () => import("../views/components/TextareaPage.vue"),
  },
  {
    path: "/components/avatar",
    name: "avatar",
    component: () => import("../views/components/AvatarPage.vue"),
  },
  {
    path: "/components/image",
    name: "image",
    component: () => import("../views/components/ImagePage.vue"),
  },
  {
    path: "/components/video",
    name: "video",
    component: () => import("../views/components/VideoPage.vue"),
  },
  {
    path: "/components/radio",
    name: "radio",
    component: () => import("../views/components/RadioPage.vue"),
  },
  {
    path: "/components/checkbox",
    name: "checkbox",
    component: () => import("../views/components/CheckboxPage.vue"),
  },
  {
    path: "/components/progressbar",
    name: "progressbar",
    component: () => import("../views/components/ProgressbarPage.vue"),
  },
  {
    path: "/components/rating",
    name: "rating",
    component: () => import("../views/components/RatingPage.vue"),
  },
  // Molecules
  {
    path: "/components/modal",
    name: "modal",
    component: () => import("../views/components/ModalPage.vue"),
  },
  {
    path: "/components/accordion",
    name: "accordion",
    component: () => import("../views/components/AccordionPage.vue"),
  },
  {
    path: "/components/card",
    name: "card",
    component: () => import("../views/components/CardPage.vue"),
  },
  {
    path: "/components/form-field",
    name: "form-field",
    component: () => import("../views/components/FormFieldPage.vue"),
  },
  {
    path: "/components/stepper",
    name: "stepper",
    component: () => import("../views/components/StepperPage.vue"),
  },
  {
    path: "/components/calendar",
    name: "calendar",
    component: () => import("../views/components/CalendarPage.vue"),
  },
  {
    path: "/components/tabs",
    name: "tabs",
    component: () => import("../views/components/TabsPage.vue"),
  },
  // Organisms
  {
    path: "/components/navbar",
    name: "navbar",
    component: () => import("../views/components/NavbarPage.vue"),
  },
  {
    path: "/components/sidebar",
    name: "sidebar",
    component: () => import("../views/components/SidebarPage.vue"),
  },
  // Tokens
  {
    path: "/tokens/colors",
    name: "colors",
    component: () => import("../views/tokens/ColorsPage.vue"),
  },
  {
    path: "/tokens/typography",
    name: "typography",
    component: () => import("../views/tokens/TypographyPage.vue"),
  },
  {
    path: "/tokens/spacing",
    name: "spacing",
    component: () => import("../views/tokens/SpacingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
