let invoices = {
  unpaid: [],
  paid: [],

  add: function(clientName, amountOwed) {
    this.unpaid.push({
      'name': clientName,
      'amount': amountOwed
    });
  },

  totalDue: function() {
    return this.unpaid.reduce((total, { amount }) => total += amount, 0);
  },

  payInvoice: function(clientName) {
    for (let idx = 0; idx < this.unpaid.length; idx++) {

      if (this.unpaid[idx].name === clientName) {
        let invoice = this.unpaid.splice(idx, 1)[0];
        this.paid.push(invoice);
        break;
      }
    }
  },

  totalPaid: function() {
    return this.paid.reduce((total, { amount }) => total += amount, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.unpaid);
console.log(invoices.totalDue());
console.log('--------------------------------');
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.unpaid);
console.log(invoices.paid)
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
