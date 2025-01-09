import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mathProblem: string = '';
  isModalOpen: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Math problem submitted:', this.mathProblem);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
