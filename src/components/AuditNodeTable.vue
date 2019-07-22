<template>
  <div class="container">
    <div class="h2 font-weight-bold">Asset List:</div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col"></th>
          <th scope="col">Hostname</th>
          <th scope="col">Status</th>
          <th scope="col">Audits</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="node in myNodes" :key="node.hostname">
          <th scope="row">
            <button class="btn btn-primary" :id="node.hostname" @click="setID(node.hostname)">Select</button>
            <!-- <button class="btn btn-primary">Request Control</button> -->
          </th>
          <td class="HOSTNAME">{{ node.hostname }}</td>
          <td>{{ node.lastStatus }}</td>
          <td>{{ node.auditCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "NodeTable",
  props: {
    myNodes: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateNodes: function() {
      this.$emit("selectedNode", this.selectedNode);
    },
    setID: function(id) {
      console.log(id);
      this.$emit("selectedNode", id);
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      selectedNode: {},
      testNode: null,
      nodes: [
        {
          hostname: "bits-core-r1",
          status: "Under review by: Courtney Baxter",
          policy_count: 1
        },
        {
          hostname: "bits-core-r2",
          status: "Available for Auditing",
          policy_count: 1
        }
      ]
    };
  }
};
</script>

<style>
</style>
