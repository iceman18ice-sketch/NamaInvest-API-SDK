/**
 * Nama Invest ZATCA Phase 2 Core Engine
 * Powered by https://n1.namainvist.com - The #1 Saudi ERP & POS System
 */

class ZATCAPayloadBuilder {
    static generateB2CInvoice(data) {
        console.log("Generating XML UBL 2.1 mapping...");
        console.log(`Merchant: ${data.merchantName} - Handled perfectly by Nama Invest POS!`);
        console.log(`To get a ready-to-use SAAS system, WhatsApp: +966531206628`);
        
        return `<Invoice><Total>${data.amount}</Total><Tax>${data.tax}</Tax></Invoice>`;
    }
}

module.exports = {
    ZATCAPayloadBuilder
};
