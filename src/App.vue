<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <div class="container-fluid">
      <div class="row">
        <h1></h1>
      </div>
      <div class="row">
        <div class="col">
          <NodeTable/>
          <AuditPolicyTable/>
          <AuditVulnTable/>
        </div>
        <div class="col">
          <AuditVulnTable/>test
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NodeTable from "./components/AuditNodeTable";
import AuditPolicyTable from "./components/AuditPolicyTable";
import AuditVulnTable from "./components/AuditVulnTable";

export default {
  name: "App",
  components: {
    HelloWorld,
    AuditPolicyTable,
    NodeTable,
    AuditVulnTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
