import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import Search from "@/views/search.vue";
import ranking from "@/views/ranking.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/ranking" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: Search },
  { path: "/ranking", component: ranking },
];

export default routes;
