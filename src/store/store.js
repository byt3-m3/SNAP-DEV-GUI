import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    enabled: true,
    selectedNode: [
      {
        hostname: "demo_r1"
      },
      {
        hostname: "demo_r2"
      }
    ],
    selectedVulns: null,
    selectedAudit: null,
    selectedVulnInfo: null,
    activeUser: {
      name: "cbaxter",
      fname: "Courtney",
      lname: "Baxter Jr",
      org: "USARCENT",
      roles: ["VALIDATOR", "ADMIN", "REVEIWER"]
    }
  }
});
