package org.base;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReportGeneration {
	public static void genarateBDDReport(String jsonPath) {
		File f = new File(System.getProperty("user.dir") + "\\Report\\JVMReport");
		Configuration c = new Configuration(f, "Facebook");
		c.addClassifications("Automation tools", "Selenium WedDriver ");
		c.addClassifications("done BY", "Muthukumar");
		c.addClassifications("Sprint", "0415");
		List<String>li=new LinkedList<String>();
		li.add(jsonPath);
		ReportBuilder r = new ReportBuilder(li,c);
		r.generateReports();
	}
}
