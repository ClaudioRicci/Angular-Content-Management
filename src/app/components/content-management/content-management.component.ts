import { Component, ViewChild } from "@angular/core";

import { MatDialog, MatTable } from "@angular/material";
import { DialogBoxComponent } from "../dialog-box/dialog-box.component";

import { CONTENT_DATA } from "../content-management/mock";

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"]
})
export class ContentManagementComponent {
  displayedColumns: string[] = [
    "id",
    "inStock",
    "name",
    "description",
    "colour",
    "quantity",
    "price",
    "size",
    "action"
  ];
  dataSource = CONTENT_DATA;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action, obj) {
    console.table(this.dataSource);
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "60vw",
      height: "60vh",
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == "Add") {
        this.addRowData(result.data);
      } else if (result.event == "Update") {
        this.updateRowData(result.data);
      } else if (result.event == "Delete") {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    this.dataSource.push({
      id: row_obj.id,
      inStock: row_obj.inStock,
      name: row_obj.name,
      description: row_obj.description,
      colour: row_obj.colour,
      quantity: row_obj.quantity,
      price: row_obj.price,
      size: row_obj.size
    });
    this.table.renderRows();
  }
  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.id = row_obj.id;
        value.inStock = row_obj.inStock;
        value.name = row_obj.name;
        value.description = row_obj.description;
        value.colour = row_obj.colour;
        value.quantity = row_obj.quantity;
        value.price = row_obj.price;
        value.size = row_obj.size;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }
}
