/*
 * File: app/view/sys/PortalFAQEdit.js
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

Ext.define('Portal.view.sys.PortalFAQEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.sysportalfaqedit',

    requires: [
        'Portal.view.sys.PortalFAQEditViewModel',
        'Portal.view.sys.PortalFAQEditViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Hidden',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.view.Table'
    ],

    controller: 'sysportalfaqedit',
    viewModel: {
        type: 'sysportalfaqedit'
    },
    modal: true,
    height: 473,
    width: 683,
    layout: 'fit',
    title: 'FAQ редактор',
    maximizable: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            layout: 'border',
            bodyPadding: 10,
            header: false,
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    height: 57,
                    layout: 'form',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Категория',
                            name: 'category',
                            displayField: 'category',
                            valueField: 'category',
                            bind: {
                                store: '{sysPortalFAQcategory}'
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Вопрос',
                            name: 'quest'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    layout: 'fit',
                    title: 'Ответ',
                    items: [
                        {
                            xtype: 'htmleditor',
                            labelAlign: 'top',
                            name: 'answer'
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    region: 'east',
                    width: 150,
                    fieldLabel: 'Label',
                    name: 'id',
                    listeners: {
                        change: 'onHiddenfieldChange'
                    }
                },
                {
                    xtype: 'gridpanel',
                    region: 'east',
                    split: true,
                    width: 218,
                    title: 'Файлы',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            flex: 1,
                            dataIndex: 'string',
                            text: 'Имя файла'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnPortalFAQEditFileAdd',
                                    iconCls: 'icon-add',
                                    text: 'Добавить файл',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnPortalFAQEditFileAddClick',
                                            scope: 'controller'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    padding: 5,
                    items: [
                        {
                            xtype: 'container',
                            padding: 5,
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnSysPortalFAQEditSave',
                                    text: 'Сохранить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnSysPortalFAQEditSaveClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnSysPortalFAQCancel',
                                    text: 'Отмена',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnSysPortalFAQCancelClick',
                                            scope: 'controller'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onHiddenfieldChange: function(field, newValue, oldValue, eOpts) {
        console.log(newValue);
    }

});