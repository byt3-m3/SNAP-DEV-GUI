<template>
  <div class="container-fluid">
    <div class="row">
      <button class="px-8 btn btn-primary mx-2" v-on:click="toogleManuelAudit">Manual Validation</button>
      <button class="btn btn-primary mx-2" v-on:click="toogleScriptedAudit">Scripted Validation</button>
      <button class="btn btn-secondary mx-2">View Config</button>
      <button class="btn btn-secondary mx-2">Send SSH Command</button>
      <button class="btn btn-secondary mx-2">Send SNMP Message</button>
    </div>
    <hr>
    <div class="h3">Group Title: {{ selectedPolicy.groupTitle }}</div>
    <hr>
    <div class="row">
      <div class="col">
        <div class="d-inline mx-2">
          <span class="font-weight-bold">Severity:</span>
          {{ selectedVuln.severity }}
        </div>

        <div class="d-inline mx-2">
          <span class="font-weight-bold">Vuln Num:</span>
          {{ selectedVuln.vulnNum }}
        </div>
        <div class="d-inline mx-2">
          <span class="font-weight-bold">Vuln ID:</span>
          {{ selectedVuln.vulndID }}
        </div>
        <div class="d-inline mx-2">
          <span class="font-weight-bold">Classification:</span>
          {{ selectedVuln.classification }}
        </div>
        <div class="d-inline mx-2">
          <span class="font-weight-bold">Rule ID:</span>
          {{ selectedVuln.ruleID }}
        </div>
      </div>
      <!-- <div class="col">test</div> -->
    </div>
    <hr>
    <div class="row">
      <div class="col">
        <div class="d-inline mx-2">
          <span class="h4 font-weight-bold">Rule Title:</span>
          {{ selectedVuln.ruleTitle }}
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col">
        <div class="h4 font-weight-bold">Discussion:</div>
        <div>{{ selectedPolicy.discussion }}</div>
      </div>
      <div class="col">
        <div class="h4 font-weight-bold">Check Content:</div>
        <div>{{ selectedPolicy.checkContent }}</div>
      </div>
      <div class="col">
        <div class="h4 font-weight-bold">Fix Text:</div>
        <div>{{ selectedPolicy.fixText }}</div>
      </div>
    </div>
    <hr>
    <div class="col"></div>
    <div class="Manual_Audit">
      <div class="row my-2 justify-content-center">
        <!-- <div class="h4 font-weight-bold">Status:</div> -->
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> Not Reviewed
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"> Open
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"> Not A Finding
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"> Not Applicable
          </label>
        </div>
      </div>
      <div class="row my-2">
        <div class="h4 font-weight-bold">Finding Details:</div>
        <div class="input-group">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div class="row my-2">
        <div class="h4 font-weight-bold">Comments:</div>
        <div class="input-group">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div class="row my-2">
        <button class="btn btn-primary mx-1">Update</button>
        <button class="btn btn-danger mx-1">Clear</button>
      </div>
    </div>
    <div class="Scripted_Audit">
      <div class="row my-2">
        <div class="h4 font-weight-bold">YAML Script:</div>
        <div class="input-group">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div class="row my-2">
        <button class="btn btn-primary mx-1">Execute</button>
        <button class="btn btn-secondary mx-1">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AuditPolicyInfo",
  methods: {
    toogleManuelAudit: function(event) {
      if (this.manualAudit) {
        $(".Manual_Audit").hide();

        this.manualAudit = false;
      } else {
        $(".Manual_Audit").show();

        this.manualAudit = true;
      }
    },
    toogleScriptedAudit: function(event) {
      if (this.scriptedAudit) {
        $(".Scripted_Audit").hide();
        this.scriptedAudit = false;
      } else {
        $(".Scripted_Audit").show();
        this.scriptedAudit = true;
      }
    }
  },
  data() {
    return {
      selectedPolicy: {
        groupTitle:
          "Layer 2 Switch Security Technical Implementation Guide - Cisco :: Release: 21 Benchmark Date: 28 Jul 2017",
        fixText:
          "Configure the device to include DNS servers or disable domain lookup.",
        checkContent:
          "Review the device configuration to ensure that DNS servers have been defined if it has been configured as a client resolver (name lookup). The configuration should look similar to one of the following examples:",
        discussion:
          "The susceptibility of IP addresses to spoofing translates to DNS host name and IP address mapping vulnerabilities. For example, suppose a source host wishes to establish a connection with a destination host and queries a DNS server for the IP address of the destination host name. If the response to this query is the IP address of a host operated by an attacker, the source host will establish a connection with the attackers host, rather than the intended target. The user on the source host might then provide logon, authentication, and other sensitive data."
      },
      selectedVuln: {
        severity: "CAT I",
        ruleTitle:
          "The network element must have DNS servers defined if it is configured as a client resolver.",
        vulnNum: "NET0820",
        vulndID: "V-3020",
        classification: "Unclass",
        ruleID: "SV-15330r2_rule"
      },
      policies: [
        {
          policy_name: "L2_INFRASTRUCTURE_STIG",
          findings: { CAT_I: 1, CAT_II: 3, CAT_III: 5 },
          auditor: "Courtney Baxter "
        }
      ],
      manualAudit: true,
      scriptedAudit: false
    };
  }
};
</script>

<style>
</style>
