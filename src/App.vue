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
          <div id="NodeTable">
            <NodeTable :myNodes="nodes" @selectedNode="getNodeAudits($event)"/>
          </div>
          <div id="AuditTable" v-if="auditTableEnabled">
            <AuditTable @AuditIDSet="getAuditVulns($event)" :audits="selectedAudit"/>
          </div>
          <div id="VulnTable" v-if="vulnTableEnabled">
            <AuditVulnTable :vulns="selectedVulns" @policyInfoSet="getPolicyInfo($event)"/>
          </div>
          <button class="btn btn-primary" @click="resetSelect">Reset</button>
        </div>
        <div class="col">
          <AuditVulnInfo id="PolicyInfo" v-if="vulnInfoEnabled" :vulnInfo="selectedVulnInfo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NodeTable from "./components/AuditNodeTable";
import AuditTable from "./components/AuditTable";
import AuditVulnTable from "./components/AuditVulnTable";
import AuditVulnInfo from "./components/AuditVulnInfo";

export default {
  name: "App",
  components: {
    HelloWorld,
    AuditTable,
    NodeTable,
    AuditVulnTable,
    AuditVulnInfo
  },
  data() {
    return {
      nodeTableEnabled: false,
      auditTableEnabled: false,
      vulnTableEnabled: false,
      vulnInfoEnabled: false,
      selectedNode: null,
      selectedVulns: null,
      selectedAudit: null,
      selectedVulnInfo: null,

      nodes: [
        {
          hostname: "r1.core.local",
          lastStatus: "Under Review By Courtney Baxter Jr.",
          audits: [
            {
              auditID: "07/18/19_L3STIG",
              findingsSummary: {
                CAT_I: 53,
                CAT_II: 34,
                CAT_III: 54
              },
              vulns: [
                {
                  severity: "CAT II",
                  status: "Not Reviewed",
                  ruleTitle:
                    "The network element must have DNS servers defined if it is configured as a client resolver.",
                  vulnNum: "NET0821",
                  vulndID: "V-3020",
                  classification: "Unclass",
                  ruleID: "SV-15330r2_rule",
                  groupTitle:
                    "Layer 2 Switch Security Technical Implementation Guide - Cisco :: Release: 21 Benchmark Date: 28 Jul 2017",
                  fixText:
                    "Configure the device to include DNS servers or disable domain lookup.",
                  checkContent:
                    "Review the device configuration to ensure that DNS servers have been defined if it has been configured as a client resolver (name lookup). The configuration should look similar to one of the following examples:",
                  discussion:
                    "The susceptibility of IP addresses to spoofing translates to DNS host name and IP address mapping vulnerabilities. For example, suppose a source host wishes to establish a connection with a destination host and queries a DNS server for the IP address of the destination host name. If the response to this query is the IP address of a host operated by an attacker, the source host will establish a connection with the attackers host, rather than the intended target. The user on the source host might then provide logon, authentication, and other sensitive data."
                }
              ]
            }
          ],
          auditCount: 2
        },
        {
          hostname: "r2.core.local",
          lastStatus: "Under Review By John Doe",
          audits: [
            {
              auditID: "07/17/19_L2STIG",
              findingsSummary: {
                CAT_I: 53,
                CAT_II: 34,
                CAT_III: 54
              },
              vulns: [
                {
                  status: "not Rerview",
                  severity: "CAT I",
                  ruleTitle:
                    "Network devices must display the DoD-approved logon banner warning.",
                  vulnNum: "NET0820",
                  vulndID: "V-3020",
                  classification: "Unclass",
                  ruleID: "SV-15330r2_rule",
                  groupTitle:
                    "Layer 2 Switch Security Technical Implementation Guide - Cisco :: Release: 21 Benchmark Date: 28 Jul 2017",
                  fixText:
                    "Configure the device to include DNS servers or disable domain lookup.",
                  checkContent:
                    "Review the device configuration to ensure that DNS servers have been defined if it has been configured as a client resolver (name lookup). The configuration should look similar to one of the following examples:",
                  discussion:
                    "The susceptibility of IP addresses to spoofing translates to DNS host name and IP address mapping vulnerabilities. For example, suppose a source host wishes to establish a connection with a destination host and queries a DNS server for the IP address of the destination host name. If the response to this query is the IP address of a host operated by an attacker, the source host will establish a connection with the attackers host, rather than the intended target. The user on the source host might then provide logon, authentication, and other sensitive data."
                }
              ]
            },
            {
              auditID: "07/18/19_L2STIG",
              findingsSummary: {
                CAT_I: 53,
                CAT_II: 34,
                CAT_III: 54
              },
              vulns: [
                {
                  severity: "CAT I",
                  ruleTitle:
                    "Group accounts must not be configured for use on the network device.",
                  vulnNum: "NET0820",
                  vulndID: "V-3020",
                  classification: "Unclass",
                  ruleID: "SV-15330r2_rule",
                  groupTitle:
                    "Layer 2 Switch Security Technical Implementation Guide - Cisco :: Release: 21 Benchmark Date: 28 Jul 2017",
                  fixText:
                    "Configure the device to include DNS servers or disable domain lookup.",
                  checkContent:
                    "Review the device configuration to ensure that DNS servers have been defined if it has been configured as a client resolver (name lookup). The configuration should look similar to one of the following examples:",
                  discussion:
                    "The susceptibility of IP addresses to spoofing translates to DNS host name and IP address mapping vulnerabilities. For example, suppose a source host wishes to establish a connection with a destination host and queries a DNS server for the IP address of the destination host name. If the response to this query is the IP address of a host operated by an attacker, the source host will establish a connection with the attackers host, rather than the intended target. The user on the source host might then provide logon, authentication, and other sensitive data."
                }
              ]
            }
          ],
          auditCount: 1
        }
      ]
    };
  },
  methods: {
    toggleVulnTable: function() {
      // this.selectedVulns = selectedVulns;
      // console.log($("#VulnTable").toggle());
    },
    getNodeAudits: function(mgmt_ip) {
      // alert(mgmt_ip);

      let vm = this;
      this.policyTableEnabled = true;

      this.nodes.forEach(function(node) {
        if (node.hostname === mgmt_ip) {
          // alert(node.hostname);

          vm.selectedNode = node;
          vm.selectedAudit = node.audits;
          vm.auditTableEnabled = true;
          return;
        }
      });
    },
    getAuditVulns: function(audit_id) {
      let vm = this;
      this.vulnTableEnabled = true;
      this.selectedNode.audits.forEach(function(audit) {
        if (audit.auditID === audit_id) {
          vm.selectedVulns = audit.vulns;
          console.log(audit.vulns);
        }
        // console.log(audit);
      });
    },
    getPolicyInfo: function(vuln_id) {
      let vm = this;
      vm.vulnInfoEnabled = true;
      vm.selectedVulns.forEach(function(vuln) {
        console.log(vuln);
        vm.selectedVulnInfo = vuln;
      });
    },
    resetSelect: function() {
      this.auditTableEnabled = false;
      this.vulnTableEnabled = false;
      this.vulnInfoEnabled = false;
    }
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
