import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { USER_DATA } from "../user-management/mock";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"]
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "age",
    "gender",
    "address",
    "postcode",
    "email",
    "telephone",
    "delete"
  ];

  dataSource = new MatTableDataSource(USER_DATA);

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

  deleteUser(user) {
    this.dataSource.data.splice(this.dataSource.data.indexOf(user.id), 1);
    this.dataSource._updateChangeSubscription();
  }
}
