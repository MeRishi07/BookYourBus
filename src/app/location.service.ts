import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient:HttpClient) { }

  private RegUrl = "http://localhost:8086/location/registration";
  private AllUrl = "http://localhost:8086/location/listAll";
  private SearchUrl = "http://localhost:8086/location/get";
  private UpdateUrl = "http://localhost:8086/location/update";
  private DeleteUrl = "http://localhost:8086/location/delete";

GetAllLocations()
{
  return this.httpClient.get<Location[]>(`${this.AllUrl}`);
}

NewLocation(location:Location)
{
  return this.httpClient.post(`${this.RegUrl}`, location);
}

SearchLocation(id:number)
{
  return this.httpClient.get<Location>(`${this.SearchUrl}/${id}`);
}

DeleteLocation(id:number)
{
  return this.httpClient.delete(`${this.DeleteUrl}/${id}`);
}

UpdateLocation(id:number, location:Location)
{
  return this.httpClient.put(`${this.UpdateUrl}`, location);
}
}
