package com.saarthi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.saarthi.model.MedicineSynonyms;
import com.saarthi.service.MedicineSynonymsService;

@Controller
public class MedicineSynonymsController {
	
	@Autowired
	MedicineSynonymsService medicineSynonymsService;
	
	@RequestMapping("/medicine")
	public String showMedicineSynonyms(Model model) {
		List<MedicineSynonyms> list =medicineSynonymsService.findAll();
		model.addAttribute("medicineList", list);
		return "formulation";
		
	}
}
