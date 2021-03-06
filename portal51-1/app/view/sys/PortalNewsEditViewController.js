/*
 * File: app/view/sys/PortalNewsEditViewController.js
 * Date: Thu Oct 06 2016 11:09:19 GMT+0200 (RTZ 1 (зима))
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Portal.view.sys.PortalNewsEditViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysportalnewsedit',

    onBtnPortalNewsEditSaveClick: function(button, e, eOpts) {
        var me = this,
            form = me.lookupReference('formNews'),
            values = form.getValues();
        if (form.isValid()) {
            me.getView().mask('Подождите...');
            Ext.Ajax.request({
                url: 'data/sys/tabMainNews-edit.php',
                params: values,
                success: function(response){
                    Ext.getStore('sys.PortalNews').reload();
                }
            });
            me.getView().unmask();
            me.getView().close();
        }
    },

    onBtnPortalNewsEditCancelClick: function(button, e, eOpts) {
        this.getView().close();
    }

});
