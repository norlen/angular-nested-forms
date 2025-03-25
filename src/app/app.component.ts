import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ParentFormComponent } from "./parent-form/parent-form.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ParentFormComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "nested-forms-test";
}
