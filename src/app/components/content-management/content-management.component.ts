import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { Item } from "../../interfaces/items";

const ELEMENT_DATA: Item[] = [
  {
    id: 100001,
    inStock: true,
    name: "Christmas Crackers",
    description: "Luxury Crackers for a cracking time.",
    colour: "red",
    quantity: 12,
    price: 5.99,
    size: "large"
  },
  {
    id: 100002,
    inStock: true,
    name: "Christmas Pudding",
    description: "Large Sultana, Orange and Brandy Sauce Christmas Pudding.",
    colour: "",
    quantity: 1,
    price: 3.99,
    size: "large"
  },
  {
    id: 100003,
    inStock: false,
    name: "Turkey",
    description: "Free range medium Turkey. Feeds 4-6.",
    colour: "",
    quantity: 1,
    price: 7.95,
    size: "medium"
  },
  {
    id: 100004,
    inStock: true,
    name: "Turkey",
    description: "Free range large Turkey. Feeds 6-8.",
    colour: "",
    quantity: 1,
    price: 10.95,
    size: "large"
  },
  {
    id: 100005,
    inStock: true,
    name: "Goose Fat",
    description: "Goose Fat for perfect Christmas potatoes",
    colour: "",
    quantity: 1,
    price: 2.7,
    size: "250ml"
  },
  {
    id: 100006,
    inStock: true,
    name: "Prosecco Italiano",
    description: "The perfect fizz for Christmas festivities.",
    colour: "straw",
    quantity: 1,
    price: 11.99,
    size: "750ml"
  },
  {
    id: 100007,
    inStock: true,
    name: "Prosecco Italiano",
    description: "The perfect fizz for Christmas festivities. Case of 6.",
    colour: "straw",
    quantity: 6,
    price: 63.99,
    size: "750ml"
  },
  {
    id: 100008,
    inStock: true,
    name: "Christmas Tree",
    description: "The perfect Christmas tree for a cosy spot.",
    colour: "green",
    quantity: 1,
    price: 23.99,
    size: "120cm"
  },
  {
    id: 100009,
    inStock: false,
    name: "Christmas Tree",
    description: "The perfect Christmas tree for a medium sized room.",
    colour: "green",
    quantity: 1,
    price: 28.99,
    size: "150cm"
  },
  {
    id: 100010,
    inStock: true,
    name: "Christmas Tree",
    description: "The perfect Christmas tree for a larger room.",
    colour: "green",
    quantity: 1,
    price: 32.99,
    size: "180cm"
  },
  {
    id: 100011,
    inStock: true,
    name: "Christmas Stocking",
    description: "Hang this at the end of the bed Christmas Eve.",
    colour: "red",
    quantity: 1,
    price: 5.99,
    size: "large"
  },
  {
    id: 100012,
    inStock: true,
    name: "Christmas Stocking",
    description: "Hang this at the end of the bed Christmas Eve.",
    colour: "silver",
    quantity: 1,
    price: 5.99,
    size: "large"
  },
  {
    id: 100013,
    inStock: false,
    name: "Christmas Stocking",
    description: "Hang this at the end of the bed Christmas Eve.",
    colour: "gold",
    quantity: 1,
    price: 5.99,
    size: "large"
  }
];

/**
 * @title Table with filtering
 */

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
    "size"
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}
