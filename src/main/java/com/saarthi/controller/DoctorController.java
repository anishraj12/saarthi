package com.saarthi.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.saarthi.model.AdvisoryModel;
import com.saarthi.model.DataModel;
import com.saarthi.model.Patient;
import com.saarthi.model.PatientHistory;
import com.saarthi.model.TreatmentModel;
import com.saarthi.model.User;
import com.saarthi.service.AdvisoryService;
import com.saarthi.service.DataService;
import com.saarthi.service.DiseaseFromulationService;
import com.saarthi.service.MedicineService;
import com.saarthi.service.PatientHistoryService;
import com.saarthi.service.TreatmentService;
import com.saarthi.service.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	UserService userService;

	@Autowired
	PatientHistoryService historyService;
	
	@Autowired
	DataService dataService;
	
	@Autowired
	MedicineService medicineService;
	
	@Autowired
	AdvisoryService advisoryService;
	
	@Autowired
	DiseaseFromulationService diseaseFromulationService;
	
	@Autowired
	TreatmentService service;
	
	@GetMapping("/console")
	public String doctorConsole(Principal p, Model m) {
		User user = userService.findByUserName(p.getName());
		// System.out.println("evoke doctor console page"+user);
		m.addAttribute("user", user);
		System.out.println("hlo doctor");
		return "doctorIndex";
	}


	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public String search(@RequestParam("search") String patientId, Model map, Principal principal,
			RedirectAttributes redirectAttributes) {
		User user = userService.findByUserName(principal.getName());
		map.addAttribute("user", user);

		 System.out.println("searchBy ID!!!!!!!!");
		// System.out.println(patientId);
		List<PatientHistory> list = historyService.findByPatientId(patientId);
		//System.out.println("1: "+list);
		if (list.size() > 0) {
			// System.out.println(list);
			map.addAttribute("PatientHistorty", list);
		} else {
			map.addAttribute("PatientHistoryNotFound", "Patient Details Not Found");
		}
		return "doctorConsole";
	}

	@GetMapping("/patientHistory")
	public String savePatientHistory(@ModelAttribute PatientHistory patientHistory, HttpSession session,
			Principal principal, Model map) {
//		doctorConsole(Principal p, Model m);
		User user = userService.findByUserName(principal.getName());
		map.addAttribute("user", user);
		patientHistory.setDoctorId(principal.getName());
		PatientHistory history = historyService.save(patientHistory);
		return "doctorConsole";
	}

	@GetMapping("/createPatientHistory")
	public String createPatientHistory(Principal p, Model m) {
		User user = userService.findByUserName(p.getName());
		m.addAttribute("user", user);
		return "question_form";
	}
	
	@PostMapping("/savePatientHistory")
	public String savePatientHistory() {
		//System.out.println("save history");
		return "redirect:/doctor/patientHistory";
	}
	
	
	@GetMapping("/add")
	public String adddnew(Model model) {
		model.addAttribute("book",new Patient());
		
		return "question_form";
	}
	
	@PostMapping("/add")
	public String getFormdata(@ModelAttribute("book") Patient patient,Principal p) {
		//System.out.println(patient.getPatientId());
		//System.out.println(patient.getAge());
		DataModel dataModel=new DataModel();
		dataModel.setAcidity(patient.getAcidity());
		dataModel.setIndigestion(patient.getIndigestion());
		dataModel.setHeadache(patient.getHeadache());
		dataModel.setBlurred_and_distorted_vision(patient.getBlurred_and_distorted_vision());
		dataModel.setExcessive_hunger(patient.getExcessive_hunger());
		dataModel.setMuscle_weakness(patient.getMuscle_weakness());
		dataModel.setStiff_neck(patient.getStiff_neck());
		dataModel.setSwelling_joints(patient.getSwelling_joints());
		dataModel.setMovement_stiffness(patient.getMovement_stiffness());
		dataModel.setDepression(patient.getDepression());
		dataModel.setIrritability(patient.getIrritability());
		dataModel.setVisual_disturbances(patient.getVisual_disturbances());
		dataModel.setPainful_walking(patient.getPainful_walking());
		dataModel.setAbdominal_pain(patient.getAbdominal_pain());
		dataModel.setNausea(patient.getNausea());
		dataModel.setVomiting(patient.getVomiting());
		dataModel.setBlood_in_mucus(patient.getBlood_in_mucus());
		dataModel.setFatigue(patient.getFatigue());
		dataModel.setFever(patient.getFever());
		dataModel.setDehydration(patient.getDehydration());
		dataModel.setLoss_of_appetite(patient.getLoss_of_appetite());
		dataModel.setCramping(patient.getCramping());
		dataModel.setBlood_in_stool(patient.getBlood_in_stool());
		dataModel.setGnawing(patient.getGnawing());
		dataModel.setUpper_abdomain_pain(patient.getUpper_abdomain_pain());
		dataModel.setFullness_feeling(patient.getUpper_abdomain_pain());
		dataModel.setHiccups(patient.getHiccups());
		dataModel.setAbdominal_bloating(patient.getAbdominal_bloating());
		dataModel.setHeartburn(patient.getHeartburn());
		dataModel.setBelching(patient.getBelching());
		dataModel.setBurning_ache(patient.getBurning_ache());
		System.out.println(dataModel);
		String disease= dataService.checkWithCondition(dataModel);
		
		PatientHistory history=new PatientHistory();
		history.setDisease(disease);
		System.out.println(history.getDisease());
		history.setPatientId(patient.getPatientId());
		history.setAge(patient.getAge());
		history.setHeight(patient.getHeight());
		history.setWeight(patient.getWeight());
		history.setGender(patient.getGender());
		Date date=new Date();
		history.setData_created(date);
		history.setDoctorId(p.getName());
		history.setSeverity(patient.getSeverity());
		String medicine=medicineService.findMedicine(history);
		//System.out.println("medicinne: "+medicine);
		//System.out.println(history);
		history.setMedicine(medicine);
		historyService.save(history);
		return "redirect:/doctor/patientHistory";
		
	}
	
	@GetMapping("/advisoryForm")
	public String advisoryForm(){
		return "advisoryForm";
	}
	
	@PostMapping("/advisory")
	public String saveAdvisory(@ModelAttribute AdvisoryModel advisoryModel ) {
		advisoryService.save(advisoryModel);
		System.out.println(advisoryModel);
		return "doctorConsole";
	}
	
	@GetMapping("/advisory")
	public String getAllAdvisory(Model model) {
		
		List<AdvisoryModel> list=advisoryService.getAllAdvisory();
		model.addAttribute("advisoryList", list);
		System.out.println(list);
		return "advisory";
	}
	
	@GetMapping("/treatment")
	public String treatment(Model model) {
		
		model.addAttribute("symptoms1",new DataModel());
		List<String>list=new ArrayList<String>(); 
		list.add("acidity");
		list.add("indigestion");
		list.add("headache");
		list.add("blurred_and_distorted_vision");
		list.add("excessive_hunger");
		list.add("muscle_weakness");
		list.add("stiff_neck");
		list.add("swelling_joints");
		list.add("movement_stiffness");
		list.add("depression");
		list.add("irritability");
		list.add("visual_disturbances");
		list.add("painful_walking");
		list.add("abdominal_pain");
		list.add("nausea");
		list.add("vomiting");
		list.add("blood_in_mucus");
		list.add("fatigue");
		list.add("fever");
		list.add("dehydration");
		list.add("loss_of_appetite");
		list.add("cramping");
		list.add("blood_in_stool");
		list.add("gnawing");
		list.add("upper_abdomain_pain");
		list.add("fullness_feeling");
		list.add("hiccups");
		list.add("abdominal_bloating");
		list.add("heartburn");
		list.add("belching");
		list.add("burning_ache");
		model.addAttribute("symptoms", list);
		return "treatment";
	}
	
	/*
	 * @GetMapping("/selectedValue") public List<DataModel>
	 * getSymtoms(@RequestParam("symtoms") int symtoms ) {
	 * System.out.println(symtoms); dataService.getSymtoms(symtoms); return null;
	 * 
	 * }
	 */
	
	
	
	
	@GetMapping("/diseaseFormulation")
	public String diseaseFormulation(Model model) {
		System.out.println("asd");
		List<String>list= diseaseFromulationService.findAllDiseaseName();
		model.addAttribute("diseaseList", list);
		return "diseaseFormulation";
	}
	
	@GetMapping("/diseaseForm")
	public List<String> diseaseFormulation() {
		System.out.println("asd");
		List<String>list= diseaseFromulationService.findAllDiseaseName();
		System.out.println("list call"+list);
		return list;
	}
	
	
	@GetMapping("/disease")
	public String disease(@RequestParam("disease") String disease,Model model) {
		List<String>list=diseaseFromulationService.getDiseaseByDiseaseName(disease);
		model.addAttribute("dieaseId", list);
		System.out.println("hi"+list);
		return "redirect:/diseaseFormulation";
		
	}
	
	
	 /**@GetMapping("/treatmentmodel") 
		public String treatmentmodel(Model model) {
	 		 System.out.println("tm"); 
		 List<String>list=service.getAllDiease();
		 System.out.println(list); 
		 model.addAttribute("treatmentList", list);
		 TreatmentModel treatmentModel=new TreatmentModel(); 
		 model.addAttribute("treatmentmodel",treatmentModel); 
		 return "treatment"; 
	 }*/
	 @GetMapping("/treatmentmodel")
	 public String treatmentModel(Model model) {
			/*
			 * System.out.println("tm");s
			 * 
			 * List<String> list = service.getAllDiease(); System.out.println(list);
			 * 
			 * model.addAttribute("treatmentList", list);
			 * 
			 * // Assuming you want to keep the existing treatmentModel if it's passed from
			 * the previous request
			 * 
			 * TreatmentModel treatmentModel = new TreatmentModel();
			 * model.addAttribute("treatmentmodel", treatmentModel);
			 */
	     

	     return "treatment";
	 }
	 
	 
	 @GetMapping("/treatmentm")
	 @ResponseBody
	 public List<String> treatmentM(Model model) {
	     System.out.println("tm");

	     List<String> list = service.getAllDiease();
	     System.out.println(list);

	     model.addAttribute("treatmentList", list);

	     // Assuming you want to keep the existing treatmentModel if it's passed from the previous request
	     
	     
	         TreatmentModel treatmentModel = new TreatmentModel();
	         //treatmentModel.setAgeRange("14");
	         model.addAttribute("treatmentmodel", treatmentModel);
	     

	     return list;
	 }

	 
	 /**@GetMapping("/treatmentForm") public String
	 gettreatmentFormDetails(@ModelAttribute("treatmentmodel") TreatmentModel
	 treatmentModel, Model model) {
	  
		 System.out.println(treatmentModel.getDisease()+""+treatmentModel.getAgeRange(
		 )+""+treatmentModel.getGender()+""+treatmentModel.getPrakruti());
		 List<String>list1=service.findMedicineDetails(treatmentModel.getDisease(),
		 treatmentModel.getAgeRange(), treatmentModel.getGender(),
		 treatmentModel.getPrakruti()); 
		 System.out.println(list1);
		 model.addFlashAttribute("medicineDetails", list1); 
		 System.out.println(list1);
		 return "redirect:/doctor/treatmentmodel";
	 
	 }*/
	 
	 
	 @GetMapping("/treatmentForm")
	 
	 public String gettreatmentFormDetails(@ModelAttribute("treatmentmodel") TreatmentModel treatmentModel, Model model) {
			/*
			 * System.out.println(treatmentModel.getDisease() + "" +
			 * treatmentModel.getAgeRange() + "" + treatmentModel.getGender() + "" +
			 * treatmentModel.getPrakruti());
			 */
	     List<String> list = service.getAllDiease();
	     System.out.println(list);

	     model.addAttribute("treatmentList", list);
	     
	     List<TreatmentModel> list1 = service.findMedicineDetails(treatmentModel.getDisease(),
	             treatmentModel.getAgeRange(), treatmentModel.getGender(),
	             treatmentModel.getPrakruti());
	     System.out.println(list1);

	     // Use flash attributes to pass data to the redirected method
	     model.addAttribute("medicineDetails", list1);
	    // model.addAttribute("treatmentmodel", treatmentModel);
	     System.out.println(treatmentModel);
	     return "treatment";
	 }

	 
	 @GetMapping("/recommand")
	 public String recommand() {
		 return "dropdown";
	 }
	 
	 @GetMapping("/recommandation")
	 public String recommandation(@RequestParam("symtoms1") String symptoms1, @RequestParam("symtoms2") String symptoms2,@RequestParam("symtoms3") String symptoms3,Model model){
		
		 List<String>list= dataService.findAllSymptoms(symptoms1,symptoms2,symptoms3);
		 HashSet<String> set = new HashSet(list);
		 List<String>newlist=new ArrayList<String>(set);
		 model.addAttribute("list", newlist);
		 return "dropdown";
		 
	 }
	 
	
	
}
