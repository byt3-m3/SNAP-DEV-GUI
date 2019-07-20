<template>
  <div class="container">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Hostname</th>
          <th scope="col">Status</th>
          <th scope="col">Policies</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="node in nodes" :key="node.hostname">
          <th scope="row">
            <button class="btn btn-primary">Select</button>
            <!-- <button class="btn btn-primary">Request Control</button> -->
          </th>
          <td>{{ node.hostname }}</td>
          <td>{{ node.status }}</td>
          <td>{{ node.policy_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "NodeTable",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
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
