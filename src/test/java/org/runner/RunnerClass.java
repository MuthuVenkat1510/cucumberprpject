package org.runner;

import org.base.JVMReportGeneration;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\FeatureFolder",
glue="org.steps",strict=true,dryRun=false,monochrome=true,
snippets=SnippetType.UNDERSCORE,tags= {"@Login"},
plugin= {"html:Report\\HTMLReport","json:Report\\JSONReport\\fb.json",
		"junit:Report\\JunitReport\\fb.xml","rerun:Failedscenarios\\failed.txt"})
public class RunnerClass {
@AfterClass
public static void after() {
JVMReportGeneration.genarateBDDReport("Report\\JSONReport\\fb.json");
}
}
