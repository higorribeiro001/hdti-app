import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { PeriodicElement } from '../periodic-element';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-services-ti',
  standalone: false,
  templateUrl: './services-ti.component.html',
  styleUrl: './services-ti.component.scss'
})
export class ServicesTiComponent implements AfterViewInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
    {data: '26/09/2025', hora: '16:00', solicitante: 'Higor Ribeiro Araujo', observacao: ''},
  ];

  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['data', 'hora', 'solicitante', 'observacao'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
