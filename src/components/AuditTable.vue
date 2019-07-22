<template>
  <div class="container">
    <div class="h2 font-weight-bold">Audit List:</div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col"></th>
          <th scope="col">Audit Name:</th>
          <th scope="col">Findings:</th>
          <th scope="col">Audtior:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="audit in audits" :key="audit.auditID">
          <th scope="row">
            <button
              class="btn btn-primary mx-1"
              id="audit.auditID"
              @click="setAuditId(audit.auditID)"
            >Select</button>
            <button class="btn btn-secondary mx-1">Export CKL</button>
            <button class="btn btn-secondary mx-1">View CKL</button>
          </th>
          <td>{{ audit.auditID }}</td>
          <td>{{ audit.findingsSummary }}</td>
          <td>{{ audit.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "AuditPolicyTable",
  props: {
    audits: {}
  },
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
  },
  methods: {
    setAuditId: function(audit_id) {
      this.$emit("AuditIDSet", audit_id);
    }
  }
};
</script>

<style>
</style>
