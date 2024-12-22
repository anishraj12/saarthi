package com.saarthi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/patient")
public class PatientController {

	@RequestMapping("/Dashboard")
	public String profile() {
	//	System.out.println("evoke api in controller!!!!!!");
		return "patientConsole";
	}
	
}
