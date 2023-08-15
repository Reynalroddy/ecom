
"use client"
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BreadCrumbs({it}) {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: '/' }

    return (
        <BreadCrumb model={it} home={home} />
    )
}