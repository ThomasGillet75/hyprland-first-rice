import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import style from "style.css"
import { For, createBinding, } from "ags"
import Hyprland from "gi://AstalHyprland"


app.start({
  css: style,
  main() {
    const hypr = Hyprland.get_default();
    const currentWorkspace = createBinding(hypr, "focusedWorkspace");
    const workspaces = createBinding(hypr, "workspaces").as(list => list.sort((a, b) => a.id - b.id))
    return (
      <window name="bar" class="container" exclusivity={Astal.Exclusivity.EXCLUSIVE} visible anchor={Astal.WindowAnchor.LEFT | Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}>
        <box class="container2">
          <For each={workspaces}>
            {(ws) => (
              <button
                class={currentWorkspace.as(focused =>
                  focused === ws ? "button-focus" : "button"
                )}
                onClicked={() => ws.focus()}
              >
                <box>               
                   <box class="box"></box>hello
                   </box>

              </button>
            )}
          </For>
        </box>
      </window>
    )
  },
})