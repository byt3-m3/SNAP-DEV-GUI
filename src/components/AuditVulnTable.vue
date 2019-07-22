<template>
  <div class="container">
    <div class="h2 font-weight-bold">Vuln List:</div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col"></th>
          <th scope="col">Vuln Name:</th>
          <th scope="col">VulnStatus:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vuln in vulns" :key="vuln.vuln_name">
          <th scope="row">
            <button @click="setVulnID(vuln.vulnNum)" class="btn btn-primary">Audit</button>
          </th>
          <td>{{ vuln.ruleTitle }}</td>
          <td>{{ vuln.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "AuditPolicyTable",
  methods: {
    setVulnID: function(vuln_id) {
      this.$emit("policyInfoSet", vuln_id);
    }
  },
  props: {
    vulns: {
      type: Array
    }
  },
  data() {
    return {
      selectedPolicy: "L2_INFRASTRUCTURE_STIG"
    };
  }
};
</script>

<style>
</style>
