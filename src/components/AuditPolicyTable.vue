<template>
  <div class="container">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Policy Name:</th>
          <th scope="col">Findings:</th>
          <th scope="col">Audtior:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="policy in policies" :key="policy.policy_name">
          <th scope="row">
            <button class="btn btn-primary">Select</button>
          </th>
          <td>{{ policy.policy_name }}</td>
          <td>{{ policy.findings }}</td>
          <td>{{ policy.auditor }}</td>
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
      selectedNode: "bits-core-r1",
      policies: [
        {
          policy_name: "L2_INFRASTRUCTURE_STIG",
          findings: { CAT_I: 1, CAT_II: 3, CAT_III: 5 },
          auditor: "Courtney Baxter "
        }
      ]
    };
  }
};
</script>

<style>
</style>
