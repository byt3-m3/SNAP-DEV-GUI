<template>
  <div class="container">
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
            <button class="btn btn-primary">Audit</button>
          </th>
          <td>{{ vuln.vuln_name }}</td>
          <td>{{ vuln.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "AuditPolicyTable",
  data() {
    return {
      selectedPolicy: "L2_INFRASTRUCTURE_STIG",
      vulns: [
        {
          vuln_name: "N2018",
          status: "Not Reveiwed",
          auditor: "Courtney Baxter "
        }
      ]
    };
  }
};
</script>

<style>
</style>
