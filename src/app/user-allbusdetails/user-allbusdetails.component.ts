import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-allbusdetails',
  templateUrl: './user-allbusdetails.component.html',
  styleUrls: ['./user-allbusdetails.component.css']
})
export class UserAllbusdetailsComponent implements OnInit {

  bus = null;
  adminId = null;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null) {
      this.router.navigate(["/error", "login to continue"]);
    } else {
      this.adminService.viewAllBus().subscribe(
        (data) => {
          this.bus = data;
        },
        (error) => {
          this.router.navigate(["/error", "some error occured"]);
        }
      );
    }
  } 

  removeBus(busNo) {
    if (confirm("are you sure you want to delete?")) {
      this.adminService.removeBus(busNo).subscribe(
        (data) => {
          this.adminService.viewAllBus().subscribe(
            (data) => {
              this.bus = data;
            },
            (error) => {
              this.router.navigate(["/error", "some error occured"]);
            }
          );
        },
        (error) => {
          this.router.navigate(["/error", "unable to delete"]);
        }
      );
    }
  }
  updateBus(busNo) {
    this.router.navigate(["/updateBus", busNo]);
  }

}
