import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { CONTENT_DATA } from "../content-management/mock";

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"]
})
export class ContentManagementComponent implements OnInit {
  displayedColumns: string[] = [
    "inStock",
    "name",
    "description",
    "colour",
    "quantity",
    "price",
    "size",
    "delete"
  ];

  dataSource = new MatTableDataSource(CONTENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteItem(item) {
    this.dataSource.data.splice(this.dataSource.data.indexOf(item.id), 1);
    this.dataSource._updateChangeSubscription();
  }
}
