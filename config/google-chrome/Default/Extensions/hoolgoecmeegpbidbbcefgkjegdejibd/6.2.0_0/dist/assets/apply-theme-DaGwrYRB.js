var __defProp = Object.defineProperty;

var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
}) : obj[key] = value;

var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};

function noop() {}

const identity = x => x;

function assign(tar, src) {
    for (const k in src) tar[k] = src[k];
    return tar;
}

function is_promise(value) {
    return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}

function run(fn) {
    return fn();
}

function blank_object() {
    return Object.create(null);
}

function run_all(fns) {
    fns.forEach(run);
}

function is_function(thing) {
    return typeof thing === "function";
}

function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}

let src_url_equal_anchor;

function src_url_equal(element_src, url) {
    if (element_src === url) return true;
    if (!src_url_equal_anchor) src_url_equal_anchor = document.createElement("a");
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}

function is_empty(obj) {
    return Object.keys(obj).length === 0;
}

function subscribe(store, ...callbacks) {
    if (store == null) {
        for (const callback of callbacks) callback(void 0);
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}

function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === void 0) return lets;
        if (typeof lets === "object") {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) merged[i] = $$scope.dirty[i] | lets[i];
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}

function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) dirty[i] = -1;
        return dirty;
    }
    return -1;
}

function exclude_internal_props(props) {
    const result = {};
    for (const k in props) if (k[0] !== "$") result[k] = props[k];
    return result;
}

function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props) if (!keys.has(k) && k[0] !== "$") rest[k] = props[k];
    return rest;
}

function null_to_empty(value) {
    return value == null ? "" : value;
}

function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}

function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== "undefined";

let now = is_client ? () => window.performance.now() : () => Date.now();

let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set;

function run_tasks(now2) {
    tasks.forEach((task => {
        if (!task.c(now2)) {
            tasks.delete(task);
            task.f();
        }
    }));
    if (tasks.size !== 0) raf(run_tasks);
}

function loop(callback) {
    let task;
    if (tasks.size === 0) raf(run_tasks);
    return {
        promise: new Promise((fulfill => {
            tasks.add(task = {
                c: callback,
                f: fulfill
            });
        })),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}

function get_root_for_style(node) {
    if (!node) return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) return root;
    return node.ownerDocument;
}

function append_empty_stylesheet(node) {
    const style_element = element("style");
    style_element.textContent = "/* empty */";
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}

function append_stylesheet(node, style) {
    append(node.head || node, style);
    return style.sheet;
}

function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}

function detach(node) {
    if (node.parentNode) node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) if (iterations[i]) iterations[i].d(detaching);
}

function element(name) {
    return document.createElement(name);
}

function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function text(data) {
    return document.createTextNode(data);
}

function space() {
    return text(" ");
}

function empty() {
    return text("");
}

function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
    return function(event) {
        event.preventDefault();
        return fn.call(this, event);
    };
}

function stop_propagation(fn) {
    return function(event) {
        event.stopPropagation();
        return fn.call(this, event);
    };
}

function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute); else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

const always_set_through_set_attribute = [ "width", "height" ];

function set_attributes(node, attributes) {
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) if (attributes[key] == null) node.removeAttribute(key); else if (key === "style") node.style.cssText = attributes[key]; else if (key === "__value") node.value = node[key] = attributes[key]; else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) node[key] = attributes[key]; else attr(node, key, attributes[key]);
}

function init_binding_group(group) {
    let _inputs;
    return {
        p(...inputs) {
            _inputs = inputs;
            _inputs.forEach((input => group.push(input)));
        },
        r() {
            _inputs.forEach((input => group.splice(group.indexOf(input), 1)));
        }
    };
}

function to_number(value) {
    return value === "" ? null : +value;
}

function children(element2) {
    return Array.from(element2.childNodes);
}

function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data) return;
    text2.data = data;
}

function set_input_value(input, value) {
    input.value = value == null ? "" : value;
}

function select_option(select, value, mounting) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    if (!mounting || value !== void 0) select.selectedIndex = -1;
}

function select_value(select) {
    const selected_option = select.querySelector(":checked");
    return selected_option && selected_option.__value;
}

function toggle_class(element2, name, toggle) {
    element2.classList.toggle(name, !!toggle);
}

function custom_event(type, detail, {bubbles: bubbles = false, cancelable: cancelable = false} = {}) {
    return new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
    });
}

class HtmlTag {
    constructor(is_svg = false) {
        __publicField(this, "is_svg", false);
        __publicField(this, "e");
        __publicField(this, "n");
        __publicField(this, "t");
        __publicField(this, "a");
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg) this.e = svg_element(target.nodeName); else this.e = element(target.nodeType === 11 ? "TEMPLATE" : target.nodeName);
            this.t = target.tagName !== "TEMPLATE" ? target : target.content;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) insert(this.t, this.n[i], anchor);
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

function construct_svelte_component(component, props) {
    return new component(props);
}

const managed_styles = new Map;

let active = 0;

function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--) hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
}

function create_style_information(doc, node) {
    const info = {
        stylesheet: append_empty_stylesheet(node),
        rules: {}
    };
    managed_styles.set(doc, info);
    return info;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const {stylesheet: stylesheet, rules: rules} = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}

function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(name ? anim => anim.indexOf(name) < 0 : anim => anim.indexOf("__svelte") === -1);
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(", ");
        active -= deleted;
        if (!active) clear_rules();
    }
}

function clear_rules() {
    raf((() => {
        if (active) return;
        managed_styles.forEach((info => {
            const {ownerNode: ownerNode} = info.stylesheet;
            if (ownerNode) detach(ownerNode);
        }));
        managed_styles.clear();
    }));
}

function create_animation(node, from, fn, params) {
    if (!from) return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
    const {delay: delay = 0, duration: duration = 300, easing: easing = identity, start: start_time = now() + delay, end: end = start_time + duration, tick: tick2 = noop, css: css} = fn(node, {
        from: from,
        to: to
    }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) name = create_rule(node, 0, 1, duration, delay, easing, css);
        if (!delay) started = true;
    }
    function stop() {
        if (css) delete_rule(node, name);
        running = false;
    }
    loop((now2 => {
        if (!started && now2 >= start_time) started = true;
        if (started && now2 >= end) {
            tick2(1, 0);
            stop();
        }
        if (!running) return false;
        if (started) {
            const p = now2 - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick2(t, 1 - t);
        }
        return true;
    }));
    start();
    tick2(0, 1);
    return stop;
}

function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== "absolute" && style.position !== "fixed") {
        const {width: width, height: height} = style;
        const a = node.getBoundingClientRect();
        node.style.position = "absolute";
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}

function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;

function set_current_component(component) {
    current_component = component;
}

function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
}

function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}

function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) callbacks.slice().forEach((fn => fn.call(this, event)));
}

const dirty_components = [];

const binding_callbacks = [];

let render_callbacks = [];

const flush_callbacks = [];

const resolved_promise = Promise.resolve();

let update_scheduled = false;

function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}

function tick() {
    schedule_update();
    return resolved_promise;
}

function add_render_callback(fn) {
    render_callbacks.push(fn);
}

function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}

const seen_callbacks = new Set;

let flushidx = 0;

function flush() {
    if (flushidx !== 0) return;
    const saved_component = current_component;
    do {
        try {
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
        } catch (e) {
            dirty_components.length = 0;
            flushidx = 0;
            throw e;
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length) binding_callbacks.pop()();
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) flush_callbacks.pop()();
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}

function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [ -1 ];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c)));
    targets.forEach((c => c()));
    render_callbacks = filtered;
}

let promise;

function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then((() => {
            promise = null;
        }));
    }
    return promise;
}

function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}

const outroing = new Set;

let outros;

function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros
    };
}

function check_outros() {
    if (!outros.r) run_all(outros.c);
    outros = outros.p;
}

function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}

function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push((() => {
            outroing.delete(block);
            if (callback) {
                if (detach2) block.d(1);
                callback();
            }
        }));
        block.o(local);
    } else if (callback) callback();
}

const null_transition = {
    duration: 0
};

function create_out_transition(node, fn, params) {
    const options = {
        direction: "out"
    };
    let config = fn(node, params, options);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    let original_inert_value;
    function go() {
        const {delay: delay = 0, duration: duration = 300, easing: easing = identity, tick: tick2 = noop, css: css} = config || null_transition;
        if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback((() => dispatch(node, false, "start")));
        if ("inert" in node) {
            original_inert_value = node.inert;
            node.inert = true;
        }
        loop((now2 => {
            if (running) {
                if (now2 >= end_time) {
                    tick2(0, 1);
                    dispatch(node, false, "end");
                    if (! --group.r) run_all(group.c);
                    return false;
                }
                if (now2 >= start_time) {
                    const t = easing((now2 - start_time) / duration);
                    tick2(1 - t, t);
                }
            }
            return running;
        }));
    }
    if (is_function(config)) wait().then((() => {
        config = config(options);
        go();
    })); else go();
    return {
        end(reset) {
            if (reset && "inert" in node) node.inert = original_inert_value;
            if (reset && config.tick) config.tick(1, 0);
            if (running) {
                if (animation_name) delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}

function create_bidirectional_transition(node, fn, params, intro) {
    const options = {
        direction: "both"
    };
    let config = fn(node, params, options);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    let original_inert_value;
    function clear_animation() {
        if (animation_name) delete_rule(node, animation_name);
    }
    function init2(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d: d,
            duration: duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const {delay: delay = 0, duration: duration = 300, easing: easing = identity, tick: tick2 = noop, css: css} = config || null_transition;
        const program = {
            start: now() + delay,
            b: b
        };
        if (!b) {
            program.group = outros;
            outros.r += 1;
        }
        if ("inert" in node) if (b) {
            if (original_inert_value !== void 0) node.inert = original_inert_value;
        } else {
            original_inert_value = node.inert;
            node.inert = true;
        }
        if (running_program || pending_program) pending_program = program; else {
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b) tick2(0, 1);
            running_program = init2(program, duration);
            add_render_callback((() => dispatch(node, b, "start")));
            loop((now2 => {
                if (pending_program && now2 > pending_program.start) {
                    running_program = init2(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, "start");
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) if (now2 >= running_program.end) {
                    tick2(t = running_program.b, 1 - t);
                    dispatch(node, running_program.b, "end");
                    if (!pending_program) if (running_program.b) clear_animation(); else if (! --running_program.group.r) run_all(running_program.group.c);
                    running_program = null;
                } else if (now2 >= running_program.start) {
                    const p = now2 - running_program.start;
                    t = running_program.a + running_program.d * easing(p / running_program.duration);
                    tick2(t, 1 - t);
                }
                return !!(running_program || pending_program);
            }));
        }
    }
    return {
        run(b) {
            if (is_function(config)) wait().then((() => {
                const opts = {
                    direction: b ? "in" : "out"
                };
                config = config(opts);
                go(b);
            })); else go(b);
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function ensure_array_like(array_like_or_iterator) {
    return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}

function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, (() => {
        lookup.delete(block.key);
    }));
}

function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--) old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map;
    const deltas = new Map;
    const updates = [];
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        } else updates.push((() => block.p(child_ctx, dirty)));
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set;
    const did_move = new Set;
    function insert2(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            next = new_block.first;
            o--;
            n--;
        } else if (!new_lookup.has(old_key)) {
            destroy(old_block, lookup);
            o--;
        } else if (!lookup.has(new_key) || will_move.has(new_key)) insert2(new_block); else if (did_move.has(old_key)) o--; else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert2(new_block);
        } else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
    }
    while (n) insert2(new_blocks[n - 1]);
    run_all(updates);
    return new_blocks;
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}

function create_component(block) {
    block && block.c();
}

function mount_component(component, target, anchor) {
    const {fragment: fragment, after_update: after_update} = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback((() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) component.$$.on_destroy.push(...new_on_destroy); else run_all(new_on_destroy);
        component.$$.on_mount = [];
    }));
    after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        flush_render_callbacks($$.after_update);
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}

function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles = null, dirty = [ -1 ]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        props: props,
        update: noop,
        not_equal: not_equal,
        bound: blank_object(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        callbacks: blank_object(),
        dirty: dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, ((i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
            if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
            if (ready) make_dirty(component, i);
        }
        return ret;
    })) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        } else $$.fragment && $$.fragment.c();
        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}

class SvelteComponent {
    constructor() {
        __publicField(this, "$$");
        __publicField(this, "$$set");
    }
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        if (!is_function(callback)) return noop;
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
        };
    }
    $set(props) {
        if (this.$$set && !is_empty(props)) {
            this.$$.skip_bound = true;
            this.$$set(props);
            this.$$.skip_bound = false;
        }
    }
}

const PUBLIC_VERSION = "4";

if (typeof window !== "undefined") (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(PUBLIC_VERSION);

typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" && self;

function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

var nprogress = {
    exports: {}
};

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function(module, exports) {
    (function(root, factory) {
        module.exports = factory();
    })(0, (function() {
        var NProgress = {};
        NProgress.version = "0.2.0";
        var Settings = NProgress.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: true,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: true,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        NProgress.configure = function(options) {
            var key, value;
            for (key in options) {
                value = options[key];
                if (value !== void 0 && options.hasOwnProperty(key)) Settings[key] = value;
            }
            return this;
        };
        NProgress.status = null;
        NProgress.set = function(n) {
            var started = NProgress.isStarted();
            n = clamp(n, Settings.minimum, 1);
            NProgress.status = n === 1 ? null : n;
            var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
            progress.offsetWidth;
            queue((function(next) {
                if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
                css(bar, barPositionCSS(n, speed, ease));
                if (n === 1) {
                    css(progress, {
                        transition: "none",
                        opacity: 1
                    });
                    progress.offsetWidth;
                    setTimeout((function() {
                        css(progress, {
                            transition: "all " + speed + "ms linear",
                            opacity: 0
                        });
                        setTimeout((function() {
                            NProgress.remove();
                            next();
                        }), speed);
                    }), speed);
                } else setTimeout(next, speed);
            }));
            return this;
        };
        NProgress.isStarted = function() {
            return typeof NProgress.status === "number";
        };
        NProgress.start = function() {
            if (!NProgress.status) NProgress.set(0);
            var work = function() {
                setTimeout((function() {
                    if (!NProgress.status) return;
                    NProgress.trickle();
                    work();
                }), Settings.trickleSpeed);
            };
            if (Settings.trickle) work();
            return this;
        };
        NProgress.done = function(force) {
            if (!force && !NProgress.status) return this;
            return NProgress.inc(.3 + .5 * Math.random()).set(1);
        };
        NProgress.inc = function(amount) {
            var n = NProgress.status;
            if (!n) return NProgress.start(); else {
                if (typeof amount !== "number") amount = (1 - n) * clamp(Math.random() * n, .1, .95);
                n = clamp(n + amount, 0, .994);
                return NProgress.set(n);
            }
        };
        NProgress.trickle = function() {
            return NProgress.inc(Math.random() * Settings.trickleRate);
        };
        (function() {
            var initial = 0, current = 0;
            NProgress.promise = function($promise) {
                if (!$promise || $promise.state() === "resolved") return this;
                if (current === 0) NProgress.start();
                initial++;
                current++;
                $promise.always((function() {
                    current--;
                    if (current === 0) {
                        initial = 0;
                        NProgress.done();
                    } else NProgress.set((initial - current) / initial);
                }));
                return this;
            };
        })();
        NProgress.render = function(fromStart) {
            if (NProgress.isRendered()) return document.getElementById("nprogress");
            addClass(document.documentElement, "nprogress-busy");
            var progress = document.createElement("div");
            progress.id = "nprogress";
            progress.innerHTML = Settings.template;
            var spinner, bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent);
            css(bar, {
                transition: "all 0 linear",
                transform: "translate3d(" + perc + "%,0,0)"
            });
            if (!Settings.showSpinner) {
                spinner = progress.querySelector(Settings.spinnerSelector);
                spinner && removeElement(spinner);
            }
            if (parent != document.body) addClass(parent, "nprogress-custom-parent");
            parent.appendChild(progress);
            return progress;
        };
        NProgress.remove = function() {
            removeClass(document.documentElement, "nprogress-busy");
            removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
            var progress = document.getElementById("nprogress");
            progress && removeElement(progress);
        };
        NProgress.isRendered = function() {
            return !!document.getElementById("nprogress");
        };
        NProgress.getPositioningCSS = function() {
            var bodyStyle = document.body.style;
            var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
            if (vendorPrefix + "Perspective" in bodyStyle) return "translate3d"; else if (vendorPrefix + "Transform" in bodyStyle) return "translate"; else return "margin";
        };
        function clamp(n, min, max) {
            if (n < min) return min;
            if (n > max) return max;
            return n;
        }
        function toBarPerc(n) {
            return (-1 + n) * 100;
        }
        function barPositionCSS(n, speed, ease) {
            var barCSS;
            if (Settings.positionUsing === "translate3d") barCSS = {
                transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
            }; else if (Settings.positionUsing === "translate") barCSS = {
                transform: "translate(" + toBarPerc(n) + "%,0)"
            }; else barCSS = {
                "margin-left": toBarPerc(n) + "%"
            };
            barCSS.transition = "all " + speed + "ms " + ease;
            return barCSS;
        }
        var queue = function() {
            var pending = [];
            function next() {
                var fn = pending.shift();
                if (fn) fn(next);
            }
            return function(fn) {
                pending.push(fn);
                if (pending.length == 1) next();
            };
        }();
        var css = function() {
            var cssPrefixes = [ "Webkit", "O", "Moz", "ms" ], cssProps = {};
            function camelCase(string) {
                return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(match, letter) {
                    return letter.toUpperCase();
                }));
            }
            function getVendorProp(name) {
                var style = document.body.style;
                if (name in style) return name;
                var vendorName, i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1);
                while (i--) {
                    vendorName = cssPrefixes[i] + capName;
                    if (vendorName in style) return vendorName;
                }
                return name;
            }
            function getStyleProp(name) {
                name = camelCase(name);
                return cssProps[name] || (cssProps[name] = getVendorProp(name));
            }
            function applyCss(element2, prop, value) {
                prop = getStyleProp(prop);
                element2.style[prop] = value;
            }
            return function(element2, properties) {
                var prop, value, args = arguments;
                if (args.length == 2) for (prop in properties) {
                    value = properties[prop];
                    if (value !== void 0 && properties.hasOwnProperty(prop)) applyCss(element2, prop, value);
                } else applyCss(element2, args[1], args[2]);
            };
        }();
        function hasClass(element2, name) {
            var list = typeof element2 == "string" ? element2 : classList(element2);
            return list.indexOf(" " + name + " ") >= 0;
        }
        function addClass(element2, name) {
            var oldList = classList(element2), newList = oldList + name;
            if (hasClass(oldList, name)) return;
            element2.className = newList.substring(1);
        }
        function removeClass(element2, name) {
            var newList, oldList = classList(element2);
            if (!hasClass(element2, name)) return;
            newList = oldList.replace(" " + name + " ", " ");
            element2.className = newList.substring(1, newList.length - 1);
        }
        function classList(element2) {
            return (" " + (element2.className || "") + " ").replace(/\s+/gi, " ");
        }
        function removeElement(element2) {
            element2 && element2.parentNode && element2.parentNode.removeChild(element2);
        }
        return NProgress;
    }));
})(nprogress);

var nprogressExports = nprogress.exports;

const nProgress = getDefaultExportFromCjs(nprogressExports);

var browserPolyfill = {
    exports: {}
};

(function(module, exports) {
    (function(global2, factory) {
        factory(module);
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" && self, (function(module2) {
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
        if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
            const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
            const wrapAPIs = extensionAPIs => {
                const apiMetadata = {
                    alarms: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        clearAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    bookmarks: {
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getChildren: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getRecent: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getSubTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTree: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    browserAction: {
                        disable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        enable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        getBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getBadgeText: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        openPopup: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        setBadgeText: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        }
                    },
                    browsingData: {
                        remove: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        removeCache: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCookies: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeDownloads: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFormData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeHistory: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeLocalStorage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePasswords: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePluginData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        settings: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    commands: {
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    contextMenus: {
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    cookies: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAllCookieStores: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    devtools: {
                        inspectedWindow: {
                            eval: {
                                minArgs: 1,
                                maxArgs: 2,
                                singleCallbackArg: false
                            }
                        },
                        panels: {
                            create: {
                                minArgs: 3,
                                maxArgs: 3,
                                singleCallbackArg: true
                            },
                            elements: {
                                createSidebarPane: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        }
                    },
                    downloads: {
                        cancel: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        download: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        erase: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFileIcon: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        open: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        pause: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFile: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        resume: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        }
                    },
                    extension: {
                        isAllowedFileSchemeAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        isAllowedIncognitoAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    history: {
                        addUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        deleteRange: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getVisits: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    i18n: {
                        detectLanguage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAcceptLanguages: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    identity: {
                        launchWebAuthFlow: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    idle: {
                        queryState: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    management: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getSelf: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setEnabled: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        uninstallSelf: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    notifications: {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPermissionLevel: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    pageAction: {
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        hide: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: true
                        }
                    },
                    permissions: {
                        contains: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        request: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    runtime: {
                        getBackgroundPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPlatformInfo: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        openOptionsPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        requestUpdateCheck: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        sendMessage: {
                            minArgs: 1,
                            maxArgs: 3
                        },
                        sendNativeMessage: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        setUninstallURL: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    sessions: {
                        getDevices: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getRecentlyClosed: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        restore: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    storage: {
                        local: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        managed: {
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        sync: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        }
                    },
                    tabs: {
                        captureVisibleTab: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        detectLanguage: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        discard: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        duplicate: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        executeScript: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getZoom: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getZoomSettings: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goBack: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goForward: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        highlight: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        insertCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        query: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        reload: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        sendMessage: {
                            minArgs: 2,
                            maxArgs: 3
                        },
                        setZoom: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        setZoomSettings: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        update: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    topSites: {
                        get: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    webNavigation: {
                        getAllFrames: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFrame: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    webRequest: {
                        handlerBehaviorChanged: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    windows: {
                        create: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getLastFocused: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    }
                };
                if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                class DefaultWeakMap extends WeakMap {
                    constructor(createItem, items = void 0) {
                        super(items);
                        this.createItem = createItem;
                    }
                    get(key) {
                        if (!this.has(key)) this.set(key, this.createItem(key));
                        return super.get(key);
                    }
                }
                const isThenable = value => value && typeof value === "object" && typeof value.then === "function";
                const makeCallback = (promise2, metadata) => (...callbackArgs) => {
                    if (extensionAPIs.runtime.lastError) promise2.reject(new Error(extensionAPIs.runtime.lastError.message)); else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise2.resolve(callbackArgs[0]); else promise2.resolve(callbackArgs);
                };
                const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
                const wrapAsyncFunction = (name, metadata) => function(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise(((resolve, reject) => {
                        if (metadata.fallbackToNoCallback) try {
                            target[name](...args, makeCallback({
                                resolve: resolve,
                                reject: reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                            target[name](...args);
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        } else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve: resolve,
                            reject: reject
                        }, metadata));
                    }));
                };
                const wrapMethod = (target, method, wrapper) => new Proxy(method, {
                    apply(targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
                let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
                const wrapObject = (target, wrappers = {}, metadata = {}) => {
                    let cache = Object.create(null);
                    let handlers = {
                        has(proxyTarget2, prop) {
                            return prop in target || prop in cache;
                        },
                        get(proxyTarget2, prop, receiver) {
                            if (prop in cache) return cache[prop];
                            if (!(prop in target)) return;
                            let value = target[prop];
                            if (typeof value === "function") if (typeof wrappers[prop] === "function") value = wrapMethod(target, target[prop], wrappers[prop]); else if (hasOwnProperty(metadata, prop)) {
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value = wrapMethod(target, target[prop], wrapper);
                            } else value = value.bind(target); else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]); else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]); else {
                                Object.defineProperty(cache, prop, {
                                    configurable: true,
                                    enumerable: true,
                                    get() {
                                        return target[prop];
                                    },
                                    set(value2) {
                                        target[prop] = value2;
                                    }
                                });
                                return value;
                            }
                            cache[prop] = value;
                            return value;
                        },
                        set(proxyTarget2, prop, value, receiver) {
                            if (prop in cache) cache[prop] = value; else target[prop] = value;
                            return true;
                        },
                        defineProperty(proxyTarget2, prop, desc) {
                            return Reflect.defineProperty(cache, prop, desc);
                        },
                        deleteProperty(proxyTarget2, prop) {
                            return Reflect.deleteProperty(cache, prop);
                        }
                    };
                    let proxyTarget = Object.create(target);
                    return new Proxy(proxyTarget, handlers);
                };
                const wrapEvent = wrapperMap => ({
                    addListener(target, listener2, ...args) {
                        target.addListener(wrapperMap.get(listener2), ...args);
                    },
                    hasListener(target, listener2) {
                        return target.hasListener(wrapperMap.get(listener2));
                    },
                    removeListener(target, listener2) {
                        target.removeListener(wrapperMap.get(listener2));
                    }
                });
                const onRequestFinishedWrappers = new DefaultWeakMap((listener2 => {
                    if (typeof listener2 !== "function") return listener2;
                    return function(req) {
                        const wrappedReq = wrapObject(req, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        listener2(wrappedReq);
                    };
                }));
                const onMessageWrappers = new DefaultWeakMap((listener2 => {
                    if (typeof listener2 !== "function") return listener2;
                    return function(message, sender, sendResponse) {
                        let didCallSendResponse = false;
                        let wrappedSendResponse;
                        let sendResponsePromise = new Promise((resolve => {
                            wrappedSendResponse = function(response) {
                                didCallSendResponse = true;
                                resolve(response);
                            };
                        }));
                        let result;
                        try {
                            result = listener2(message, sender, wrappedSendResponse);
                        } catch (err) {
                            result = Promise.reject(err);
                        }
                        const isResultThenable = result !== true && isThenable(result);
                        if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                        const sendPromisedResult = promise2 => {
                            promise2.then((msg => {
                                sendResponse(msg);
                            }), (error => {
                                let message2;
                                if (error && (error instanceof Error || typeof error.message === "string")) message2 = error.message; else message2 = "An unexpected error occurred";
                                sendResponse({
                                    __mozWebExtensionPolyfillReject__: true,
                                    message: message2
                                });
                            })).catch((err => {
                                console.error("Failed to send onMessage rejected reply", err);
                            }));
                        };
                        if (isResultThenable) sendPromisedResult(result); else sendPromisedResult(sendResponsePromise);
                        return true;
                    };
                }));
                const wrappedSendMessageCallback = ({reject: reject, resolve: resolve}, reply) => {
                    if (extensionAPIs.runtime.lastError) if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve(); else reject(new Error(extensionAPIs.runtime.lastError.message)); else if (reply && reply.__mozWebExtensionPolyfillReject__) reject(new Error(reply.message)); else resolve(reply);
                };
                const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise(((resolve, reject) => {
                        const wrappedCb = wrappedSendMessageCallback.bind(null, {
                            resolve: resolve,
                            reject: reject
                        });
                        args.push(wrappedCb);
                        apiNamespaceObj.sendMessage(...args);
                    }));
                };
                const staticWrappers = {
                    devtools: {
                        network: {
                            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                        }
                    },
                    runtime: {
                        onMessage: wrapEvent(onMessageWrappers),
                        onMessageExternal: wrapEvent(onMessageWrappers),
                        sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                            minArgs: 1,
                            maxArgs: 3
                        })
                    },
                    tabs: {
                        sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                            minArgs: 2,
                            maxArgs: 3
                        })
                    }
                };
                const settingMetadata = {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                };
                apiMetadata.privacy = {
                    network: {
                        "*": settingMetadata
                    },
                    services: {
                        "*": settingMetadata
                    },
                    websites: {
                        "*": settingMetadata
                    }
                };
                return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
            };
            module2.exports = wrapAPIs(chrome);
        } else module2.exports = globalThis.browser;
    }));
})(browserPolyfill);

var browserPolyfillExports = browserPolyfill.exports;

const browser = getDefaultExportFromCjs(browserPolyfillExports);

const CheckMarkIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n<path fill="currentColor" d="M6 14a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414l2.157 2.157 6.316-9.023a1 1 0 0 1 1.639 1.146l-7 10a1 1 0 0 1-.732.427A.863.863 0 0 1 6 14z"></path>\n</svg>\n';

const FilterOnIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">\n<path class="clr-i-outline clr-i-outline-path-1" d="M33 4H3a1 1 0 0 0-1 1v1.67a1.79 1.79 0 0 0 .53 1.27L14 19.58v10.2l2 .76V19a1 1 0 0 0-.29-.71L4 6.59V6h28v.61L20.33 18.29A1 1 0 0 0 20 19v13.21l2 .79V19.5L33.47 8A1.81 1.81 0 0 0 34 6.7V5a1 1 0 0 0-1-1z" fill="currentColor"/>\n</svg>\n';

const NotifyIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z" fill="currentColor"/></g></svg>\n';

const NotifyOffIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M19 10c0-3.224-2.18-5.94-5.146-6.752a2 2 0 0 0-3.708 0a6.956 6.956 0 0 0-1.587.655l1.492 1.491A5 5 0 0 1 17 10v2.343l2 2V10zM3.175 17.434L5 14.697V10c0-1.05.231-2.046.646-2.94L3.293 4.707a1 1 0 1 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414L17.586 19h-2.121a3.5 3.5 0 0 1-6.93 0H4.013a.994.994 0 0 1-.633-.215a.999.999 0 0 1-.205-1.35zM5.87 17h9.717l-8.39-8.39A5.002 5.002 0 0 0 7 10v5a1 1 0 0 1-.168.555L5.87 17zm4.716 2a1.5 1.5 0 0 0 2.83 0h-2.83z" fill="currentColor"/></g></svg>\n';

const OpenInNew = '\x3c!-- This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/. --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M5 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a1 1 0 0 0-2 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 1 0 0-2z"></path><path fill="currentColor" d="M14.935 1.618A1 1 0 0 0 14.012 1h-5a1 1 0 1 0 0 2h2.586L8.305 6.293A1 1 0 1 0 9.72 7.707l3.293-3.293V7a1 1 0 1 0 2 0V2a1 1 0 0 0-.077-.382z"></path></svg>\n';

const RefreshIcon = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 10.75h-3m12.5-2c0 3-2.798 5.5-6.25 5.5c-3.75 0-6.25-3.5-6.25-3.5v3.5m9.5-9h3m-12.5 2c0-3 2.798-5.5 6.25-5.5c3.75 0 6.25 3.5 6.25 3.5v-3.5"/></svg>\n';

const SettingsIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M13.82 22h-3.64a1 1 0 0 1-.977-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.623 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5.253-.142.513-.271.779-.386l.408-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a7.993 7.993 0 0 1 1.534.887l1.838-.585a1 1 0 0 1 1.169.453l1.82 3.153c.232.407.152.922-.193 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.98 7.98 0 0 1-1.534.886l-.412 1.879a1 1 0 0 1-.976.786zm-6.2-5.771.82.6c.185.136.377.261.577.375.188.109.38.207.579.296l.933.409.457 2.091h2.03l.457-2.092.933-.409c.407-.18.794-.403 1.153-.666l.82-.6 2.042.65 1.015-1.758-1.583-1.443.112-1.012c.05-.443.05-.89 0-1.332l-.112-1.012 1.584-1.446-1.016-1.759-2.041.65-.821-.6a6.227 6.227 0 0 0-1.153-.671l-.933-.409L13.016 4h-2.03l-.46 2.092-.93.408a6.01 6.01 0 0 0-1.153.666l-.821.6-2.04-.65L4.565 8.88l1.583 1.441-.112 1.013c-.05.443-.05.89 0 1.332l.112 1.012-1.583 1.443 1.015 1.758 2.04-.65zM11.996 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 2 2.09v.4V12a2 2 0 0 0-2-2z"/></svg>\n';

const WarningIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path class="clr-i-solid clr-i-solid-path-1" d="M34.6 29.21L20.71 3.65a3.22 3.22 0 0 0-5.66 0L1.17 29.21A3.22 3.22 0 0 0 4 34h27.77a3.22 3.22 0 0 0 2.83-4.75zM16.6 10a1.4 1.4 0 0 1 2.8 0v12a1.4 1.4 0 0 1-2.8 0zM18 29.85a1.8 1.8 0 1 1 1.8-1.8a1.8 1.8 0 0 1-1.8 1.8z" fill="currentColor"/></svg>\n';

const subscriber_queue = [];

function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe
    };
}

function writable(value, start = noop) {
    let stop;
    const subscribers = new Set;
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) subscriber_queue[i][0](subscriber_queue[i + 1]);
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update2(fn) {
        set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
        const subscriber = [ run2, invalidate ];
        subscribers.add(subscriber);
        if (subscribers.size === 1) stop = start(set, update2) || noop;
        run2(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0 && stop) {
                stop();
                stop = null;
            }
        };
    }
    return {
        set: set,
        update: update2,
        subscribe: subscribe2
    };
}

function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [ stores ] : stores;
    if (!stores_array.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const auto = fn.length < 2;
    return readable(initial_value, ((set, update2) => {
        let started = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) return;
            cleanup();
            const result = fn(single ? values[0] : values, set, update2);
            if (auto) set(result); else cleanup = is_function(result) ? result : noop;
        };
        const unsubscribers = stores_array.map(((store, i) => subscribe(store, (value => {
            values[i] = value;
            pending &= ~(1 << i);
            if (started) sync();
        }), (() => {
            pending |= 1 << i;
        }))));
        started = true;
        sync();
        return function() {
            run_all(unsubscribers);
            cleanup();
            started = false;
        };
    }));
}

const messageListeners = new Map;

async function sendMessage(id, payload) {
    try {
        const message = {
            id: id,
            payload: payload
        };
        const response = await chrome.runtime.sendMessage(message);
        return response;
    } catch (error) {
        const msg = error.message;
        if (msg === "Could not establish connection. Receiving end does not exist.") {
            console.warn(msg);
            return;
        }
        console.error(error, msg);
    }
}

let listener;

function listenForMessages(context) {
    if (listener && browser.runtime.onMessage.hasListener(listener)) browser.runtime.onMessage.removeListener(listener);
    listener = function(request) {
        var _a;
        const message = request;
        console.info(`${context} received message`, message);
        void ((_a = messageListeners.get(message.id)) == null ? void 0 : _a(message.payload));
    };
    browser.runtime.onMessage.addListener(listener);
}

function onMessage(id, cb) {
    messageListeners.set(id, cb);
}

const DEFAULT_OPTIONS = {
    updateInterval: 60,
    waitTimeout: 2,
    limit: 25,
    theme: "auto",
    expandWithItems: 5,
    delPostAfterBodyClick: false,
    delListAfterOpening: false,
    hideEmptyGroups: false,
    notificationSoundId: null,
    pollUserInterval: 10 * 60,
    redditUrlType: "new",
    customRedditUrl: "https://troddit.com/",
    onBadgeClick: "popup"
};

var RedditObjectKind = (RedditObjectKind2 => {
    RedditObjectKind2["comment"] = "t1";
    RedditObjectKind2["account"] = "t2";
    RedditObjectKind2["link"] = "t3";
    RedditObjectKind2["message"] = "t4";
    RedditObjectKind2["subreddit"] = "t5";
    RedditObjectKind2["award"] = "t6";
    return RedditObjectKind2;
})(RedditObjectKind || {});

function mapObjToQueryStr(params) {
    return Object.entries(params).map((pair => pair.join("="))).join("&");
}

const subredditNameRegExp = /^[A-Z0-9]\w{2,20}$/i;

const testMultireddit = subs => subs.split("+").every((s => subredditNameRegExp.test(s)));

const redditUrl = "https://reddit.com";

const redditOldUrl = "https://old.reddit.com";

function getRedditBaseUrl(urlType, customUrl) {
    switch (urlType) {
      case "old":
        return redditOldUrl;

      case "custom":
        return customUrl;

      default:
        return redditUrl;
    }
}

const generateId = () => Math.random().toString(36).substring(2, 6) + (new Date).getTime().toString(36);

function constructUrl(endpoint, opts) {
    try {
        return new URL(endpoint, getRedditBaseUrl(opts.redditUrlType, opts.customRedditUrl)).href;
    } catch (error) {
        return new URL(endpoint, redditUrl).href;
    }
}

function getSubredditUrl(subreddit, opts) {
    const endpoint = `/r/${subreddit}/new`;
    return constructUrl(endpoint, opts);
}

function getInboxUrl(opts) {
    const endpoint = "/message/inbox";
    return constructUrl(endpoint, opts);
}

function getSearchQueryUrl(query = "", subreddit = "", opts) {
    const endpoint = subreddit ? `/r/${subreddit}/search?sort=new&restrict_sr=on&q=${query}` : `/search?q=${query}&sort=new`;
    return constructUrl(endpoint, opts);
}

function getUserProfileUrl(username, type = "overview", opts) {
    let endpoint = `/user/${username}`;
    if (type === "comments") endpoint += "/comments";
    if (type === "submitted") endpoint += opts.redditUrlType === "old" ? "/submitted" : "/posts";
    return constructUrl(endpoint, opts);
}

function debounce(func, waitMs) {
    let waiting = false;
    let tmId;
    return (...args) => {
        if (waiting) clearTimeout(tmId);
        waiting = true;
        tmId = setTimeout((() => {
            func(...args);
            waiting = false;
        }), waitMs);
    };
}

function filterKeys(allowedKeys, obj = {}) {
    return allowedKeys.reduce(((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }), {});
}

function filterPostDataProperties(post) {
    var _a, _b;
    if (!(post == null ? void 0 : post.data)) return post;
    const filterList = [ "author", "created_utc", "created", "id", "link_flair_text", "name", "over_18", "permalink", "preview", "selftext", "subreddit", "title", "url", "is_gallery", "media_metadata" ];
    const data = filterKeys(filterList, post.data);
    if ((((_a = data.selftext) == null ? void 0 : _a.length) || 0) > 400) data.selftext = (_b = data.selftext) == null ? void 0 : _b.slice(0, 400);
    return {
        ...post,
        data: data
    };
}

function getAccountByScope(accounts, scopeList) {
    const fit = Object.values(accounts || {}).filter((ac => {
        var _a;
        if (scopeList == null ? void 0 : scopeList.length) {
            if (!((_a = ac.auth.scope) == null ? void 0 : _a.length)) return false;
            const acScopes = ac.auth.scope.split(" ");
            if (!scopeList.every((s => acScopes.includes(s)))) return false;
        }
        return ac.auth.refreshToken;
    }));
    return fit.length ? fit[0] : null;
}

function getItemTitle(post) {
    var _a;
    if (post.kind === RedditObjectKind.link) return post.data.title; else if (post.kind === RedditObjectKind.comment) return ((_a = post.data.body) == null ? void 0 : _a.length) > 80 ? `${post.data.body.slice(0, 80)}...` : post.data.body;
}

function idToUserIdx(id) {
    const indexNum = Number.parseInt(id.split("_")[1]);
    if (!Number.isNaN(indexNum)) return indexNum;
    return null;
}

const dataFields = {
    mail: {},
    accounts: {},
    options: DEFAULT_OPTIONS,
    queries: {},
    queriesList: [],
    subredditList: [],
    subreddits: {},
    pinnedPostList: [],
    notifications: [],
    usersList: [],
    showReddixPromo: true
};

function concatUnique(arr1, arr2, getId) {
    const result = [];
    if (!arr1) arr1 = [];
    if (!arr2) arr2 = [];
    const ids = new Set;
    [ ...arr1, ...arr2 ].forEach((item => {
        if (ids.has(getId(item))) return;
        ids.add(getId(item));
        result.push(item);
    }));
    return result;
}

function filterUnreadMessages(unreadMessages, mail) {
    if (!unreadMessages) return;
    if (!mail.messages) mail.messages = [];
    const prevUnread = mail.messages;
    const ids = new Set;
    mail.messages.forEach((m => ids.add(m.data.id)));
    unreadMessages = unreadMessages.filter((m => !ids.has(m.data.id)));
    mail.messages = [ ...unreadMessages, ...prevUnread ];
    if (unreadMessages[0]) mail.lastPostCreated = unreadMessages[0].data.created;
}

const storage = {
    setLocal(items) {
        return browser.storage.local.set(items);
    },
    getLocal(keys) {
        return browser.storage.local.get(keys);
    },
    async getMail() {
        const {mail: mail} = await storage.getLocal({
            mail: {}
        });
        return mail;
    },
    async getAccounts() {
        const {accounts: accounts} = await storage.getLocal({
            accounts: {}
        });
        return accounts;
    },
    async getOptions() {
        const {options: options} = await storage.getLocal({
            options: DEFAULT_OPTIONS
        });
        return options;
    },
    async getPinnedPostList() {
        const {pinnedPostList: pinnedPostList} = await storage.getLocal({
            pinnedPostList: []
        });
        return pinnedPostList;
    },
    async getSubredditList() {
        const {subredditList: subredditList} = await storage.getLocal({
            subredditList: []
        });
        return subredditList;
    },
    async getSubredditData() {
        const {subreddits: subreddits} = await storage.getLocal({
            subreddits: {}
        });
        return subreddits;
    },
    async getQueriesList() {
        const {queriesList: queriesList} = await storage.getLocal({
            queriesList: []
        });
        return queriesList;
    },
    async getQueriesData() {
        const {queries: queries} = await storage.getLocal({
            queries: {}
        });
        return queries;
    },
    async getUsersList() {
        const {usersList: usersList} = await storage.getLocal({
            usersList: []
        });
        return usersList;
    },
    async getNotificationsData() {
        const {notifications: notifications} = await storage.getLocal({
            notifications: []
        });
        return notifications;
    },
    async getAllData() {
        return storage.getLocal(dataFields);
    },
    async getExportData(accounts = false) {
        var _a;
        const data = await storage.getLocal({
            ...accounts ? {
                accounts: {}
            } : {},
            options: DEFAULT_OPTIONS,
            queriesList: [],
            subredditList: [],
            usersList: [],
            pinnedPostList: []
        });
        if (data.accounts) Object.values(data.accounts).forEach((acc => {
            acc.mail = {
                messages: []
            };
        }));
        (_a = data.usersList) == null ? void 0 : _a.forEach((u => {
            u.data = [];
        }));
        return data;
    },
    async importData(data) {
        const sData = await storage.getAllData();
        if (data.options) {
            data.options.limit = DEFAULT_OPTIONS.limit;
            data.options.waitTimeout = DEFAULT_OPTIONS.waitTimeout;
            data.options.updateInterval = Math.max(2, Number.parseInt(data.options.updateInterval) || DEFAULT_OPTIONS.updateInterval);
            sData.options = {
                ...sData.options,
                ...data.options
            };
        }
        if (data.accounts) {
            Object.values(data.accounts).forEach((acc => {
                acc.mail = {
                    messages: [],
                    lastUpdate: 0
                };
            }));
            sData.accounts = {
                ...sData.accounts || {},
                ...data.accounts
            };
        }
        if (data.subredditList && Array.isArray(data.subredditList)) sData.subredditList = concatUnique(sData.subredditList, data.subredditList, (i => i.id));
        if (data.queriesList && Array.isArray(data.queriesList)) sData.queriesList = concatUnique(sData.queriesList, data.queriesList, (i => i.id));
        if (data.pinnedPostList && Array.isArray(data.pinnedPostList)) sData.pinnedPostList = concatUnique(sData.pinnedPostList, data.pinnedPostList, (i => i.data.id));
        if (data.usersList && Array.isArray(data.usersList)) sData.usersList = concatUnique(sData.usersList || [], data.usersList, (i => i.username));
        await storage.setLocal(sData);
    },
    async saveAccounts(accounts) {
        return storage.setLocal({
            accounts: accounts
        });
    },
    async saveAuthData({id: id, data: data}) {
        const accounts = await storage.getAccounts();
        if (!accounts[id]) accounts[id] = {
            id: id,
            auth: {},
            checkMail: true,
            mailNotify: true,
            mail: {
                messages: []
            }
        };
        const auth = accounts[id].auth;
        if (data) {
            auth.accessToken = data.access_token;
            auth.refreshToken = data.refresh_token;
            auth.scope = data.scope || "";
            auth.error = "";
            const expiresInRelative = +data.expires_in || 0;
            auth.expiresIn = expiresInRelative && (new Date).getTime() + expiresInRelative * 1e3;
        }
        return storage.setLocal({
            accounts: accounts
        });
    },
    async saveMail(mail) {
        return storage.setLocal({
            mail: mail
        });
    },
    async saveMessageData({unreadMessages: unreadMessages, error: error}) {
        const mail = await storage.getMail() || {
            messages: []
        };
        if (error) {
            mail.error = `Couldn't fetch messages. ${error.message || ""}`;
            return storage.saveMail(mail);
        }
        mail.error = null;
        mail.lastUpdate = Date.now();
        filterUnreadMessages(unreadMessages, mail);
        return storage.saveMail(mail);
    },
    async saveAccMessageData(accId, {unreadMessages: unreadMessages, error: error}) {
        const accs = await storage.getAccounts();
        if (!accs[accId]) accs[accId] = {
            id: accId,
            auth: {},
            mail: {
                messages: []
            }
        };
        if (error) {
            accs[accId].error = `Couldn't fetch messages. ${error.message || ""}`;
            return storage.saveAccounts(accs);
        }
        accs[accId].error = null;
        accs[accId].auth.error = null;
        if (!accs[accId].mail) accs[accId].mail = {
            messages: []
        };
        const mail = accs[accId].mail;
        mail.lastUpdate = Date.now();
        filterUnreadMessages(unreadMessages, mail);
        return storage.saveAccounts(accs);
    },
    async saveOptions(data) {
        const optionsPrev = await storage.getOptions();
        return storage.setLocal({
            options: {
                ...optionsPrev,
                ...data
            }
        });
    },
    async savePinnedPost(post) {
        const prev = await storage.getPinnedPostList();
        if (prev.findIndex((p => p.data.id === post.data.id)) !== -1) return;
        return storage.setLocal({
            pinnedPostList: [ post, ...prev ]
        });
    },
    async saveSubredditList(subredditList) {
        await storage.prune({
            subIdList: subredditList.map((s => s.id))
        });
        return storage.setLocal({
            subredditList: subredditList
        });
    },
    async saveSubredditOpts(subOpts) {
        const sOpts = await storage.getSubredditList();
        let wasUpdated = false;
        const updatedList = sOpts.map((current => {
            if (current.id !== subOpts.id) return current;
            if (subOpts.subreddit !== current.subreddit) storage.removeSubredditData(current.id).catch(console.error);
            wasUpdated = true;
            return subOpts;
        }));
        if (!wasUpdated) updatedList.push(subOpts);
        return storage.setLocal({
            subredditList: updatedList
        });
    },
    async saveQuery(query) {
        const queriesList = await storage.getQueriesList();
        const updateStatus = {
            wasUpdated: false,
            shouldClear: false
        };
        const queriesUpdated = queriesList.map((q => {
            const {id: id, subreddit: prevSubreddit, query: prevQuery} = q;
            if (id !== query.id) return q;
            if (prevQuery !== query.query || prevSubreddit !== query.subreddit) updateStatus.shouldClear = true;
            updateStatus.wasUpdated = true;
            return query;
        }));
        if (!updateStatus.wasUpdated) queriesUpdated.push(query);
        if (updateStatus.shouldClear) await storage.removeQueryData(query.id);
        return storage.setLocal({
            queriesList: queriesUpdated
        });
    },
    saveUsersList(usersList) {
        return storage.setLocal({
            usersList: usersList
        });
    },
    updateWatchDataObject(prevData, {posts: newPosts = [], error: error = null, limit: limit = 50, lastPostCreated: lastPostCreated} = {}) {
        const result = {
            ...prevData
        };
        if (newPosts && newPosts.length) {
            const savedPosts = prevData.posts || [];
            const ids = new Set(savedPosts.map((p => p.data.id)));
            const postFiltered = newPosts.map((p => filterPostDataProperties(p))).filter((p => !ids.has(p.data.id)));
            result.posts = [ ...postFiltered, ...savedPosts ].slice(0, limit);
            if (postFiltered[0]) {
                result.lastPost = postFiltered[0].data.name;
                result.lastPostCreated = lastPostCreated || postFiltered[0].data.created;
            }
        }
        result.error = error;
        result.lastUpdate = Date.now();
        return result;
    },
    async saveQueryData(queryId, postData) {
        const data = await storage.getQueriesData();
        const current = data[queryId] || {};
        const updatedQuery = storage.updateWatchDataObject(current, postData);
        await storage.setLocal({
            queries: {
                ...data,
                [queryId]: updatedQuery
            }
        });
    },
    async saveSubredditData(id, postData) {
        const prevData = await storage.getSubredditData();
        const current = prevData[id] || {};
        const updatedSubreddit = storage.updateWatchDataObject(current, postData);
        return storage.setLocal({
            subreddits: {
                ...prevData,
                [id]: updatedSubreddit
            }
        });
    },
    async getAudioFile() {
        const {audio: audio} = await storage.getLocal({
            audio: {}
        });
        return audio;
    },
    async saveAudioFile(dataUrl) {
        return storage.setLocal({
            audio: {
                dataUrl: dataUrl
            }
        });
    },
    async saveNotificationsData(id, data) {
        const prev = await storage.getNotificationsData();
        const notifications = prev.slice(-9);
        notifications.push({
            id: id,
            data: data
        });
        return storage.setLocal({
            notifications: notifications
        });
    },
    async setAuthError(error) {
        const accs = await storage.getAccounts();
        const {id: id} = error;
        if (!accs[id]) return;
        accs[id].auth.error = error.message;
        if (error.invalidateToken) accs[id].auth.refreshToken = null;
        return storage.saveAccounts(accs);
    },
    async clearStorage() {
        return browser.storage.local.clear();
    },
    async removeAccount(ids) {
        const accs = await storage.getAccounts();
        const result = {};
        Object.keys(accs).forEach((k => {
            var _a;
            if (ids.includes((_a = accs[k]) == null ? void 0 : _a.id)) return;
            result[k] = accs[k];
        }));
        return storage.saveAccounts(result);
    },
    async removeAccountMessage({accId: accId, messageId: messageId}) {
        var _a;
        const accounts = await storage.getAccounts();
        const mail = (_a = accounts[accId]) == null ? void 0 : _a.mail;
        if (!mail) return;
        mail.messages = (mail.messages || []).filter((m => m.data.id !== messageId));
        await storage.setLocal({
            accounts: accounts
        });
    },
    async removeQueryData(queryId) {
        const queries = await storage.getQueriesData();
        queries[queryId] = {
            posts: []
        };
        await storage.setLocal({
            queries: queries
        });
    },
    async removeSubredditData(id) {
        const subreddits = await storage.getSubredditData();
        subreddits[id] = {
            posts: []
        };
        await storage.setLocal({
            subreddits: subreddits
        });
    },
    async removePost({id: id, subreddit: subreddit, searchId: searchId, accountId: accountId}) {
        var _a, _b, _c, _d;
        if (subreddit) {
            const subreddits = await storage.getSubredditData();
            subreddits[subreddit].posts = (_a = subreddits[subreddit].posts) == null ? void 0 : _a.filter((({data: data}) => data.id !== id));
            await storage.setLocal({
                subreddits: subreddits
            });
        }
        if (searchId) {
            const queries = await storage.getQueriesData();
            queries[searchId].posts = (_b = queries[searchId].posts) == null ? void 0 : _b.filter((({data: data}) => data.id !== id));
            await storage.setLocal({
                queries: queries
            });
        }
        if (accountId) {
            const accounts = await storage.getAccounts();
            const mail = (_c = accounts[accountId]) == null ? void 0 : _c.mail;
            if (!mail) return;
            mail.messages = (_d = mail.messages) == null ? void 0 : _d.filter((({data: data}) => data.id !== id));
            await storage.saveAccounts(accounts);
        }
    },
    async removeUserPost({userIndex: userIndex, postId: postId}) {
        var _a, _b;
        const usersList = await storage.getUsersList();
        if ((_a = usersList[userIndex]) == null ? void 0 : _a.data) {
            usersList[userIndex].data = (_b = usersList[userIndex].data) == null ? void 0 : _b.filter((item => item.data.id !== postId));
            await storage.saveUsersList(usersList);
        }
    },
    async removePinPost(id) {
        const pinnedPostList = await storage.getPinnedPostList();
        return storage.setLocal({
            pinnedPostList: pinnedPostList.filter((p => p.data.id !== id))
        });
    },
    async removePostsFrom({subredditId: subredditId, searchId: searchId, followUserIndex: followUserIndex, clearTS: clearTS}) {
        if (subredditId) {
            const subreddits = await storage.getSubredditData();
            subreddits[subredditId].posts = [];
            if (clearTS) subreddits[subredditId].lastPostCreated = null;
            await storage.setLocal({
                subreddits: subreddits
            });
        }
        if (searchId) {
            const queries = await storage.getQueriesData();
            queries[searchId].posts = [];
            if (clearTS) queries[searchId].lastPostCreated = null;
            await storage.setLocal({
                queries: queries
            });
        }
        if (followUserIndex !== void 0) {
            const usersList = await storage.getUsersList();
            usersList[followUserIndex].data = [];
            if (clearTS) usersList[followUserIndex].lastPostCreated = null;
            await storage.saveUsersList(usersList);
        }
    },
    async removeAllPosts() {
        const {queries: queries, subreddits: subreddits, usersList: usersList, mail: mail, accounts: accounts} = await storage.getAllData();
        Object.values(accounts || {}).forEach((acc => {
            if (!acc.mail) acc.mail = {
                messages: []
            }; else acc.mail.messages = [];
        }));
        Object.keys(subreddits).forEach((subr => {
            subreddits[subr].posts = [];
        }));
        Object.keys(queries).forEach((q => {
            queries[q].posts = [];
        }));
        usersList == null ? void 0 : usersList.forEach((u => {
            u.data = [];
        }));
        if (mail) mail.messages = [];
        await storage.setLocal({
            subreddits: subreddits,
            queries: queries,
            usersList: usersList,
            mail: mail,
            accounts: accounts
        });
    },
    async removeMessages() {
        const mail = await storage.getMail() || {};
        mail.messages = [];
        await storage.setLocal({
            mail: mail
        });
    },
    async removeAccountMessages(accId) {
        var _a;
        const {accounts: accounts = {}} = await storage.getLocal({
            accounts: {}
        });
        if (!accounts[accId]) return;
        const m = (_a = accounts[accId]) == null ? void 0 : _a.mail;
        if (!m) return;
        m.messages = [];
        await storage.setLocal({
            accounts: accounts
        });
    },
    async removeAllMessages() {
        const {mail: mail = {}, accounts: accounts = {}} = await storage.getLocal({
            mail: {},
            accounts: {}
        });
        Object.values(accounts).forEach((a => {
            if (!a.mail) a.mail = {
                messages: []
            };
            a.mail.messages = [];
        }));
        mail.messages = [];
        await storage.setLocal({
            mail: mail,
            accounts: accounts
        });
    },
    async removeMessage({accId: accId, messageId: messageId}) {
        var _a;
        if (accId) {
            const accounts = await storage.getAccounts();
            const mail2 = (_a = accounts[accId]) == null ? void 0 : _a.mail;
            if (!mail2) return;
            mail2.messages = (mail2.messages || []).filter((m => m.data.id !== messageId));
            await storage.setLocal({
                accounts: accounts
            });
            return;
        }
        const mail = await storage.getMail();
        if (!mail) return;
        mail.messages = (mail.messages || []).filter((m => m.data.id !== messageId));
        await storage.setLocal({
            mail: mail
        });
    },
    async removeSubreddits(ids = []) {
        const subredditList = await storage.getSubredditList();
        const updated = subredditList.filter((q => !ids.includes(q.id)));
        await storage.prune({
            subIdList: updated.map((s => s.id))
        });
        return storage.setLocal({
            subredditList: updated
        });
    },
    async removeQueries(ids = []) {
        const queriesList = await storage.getQueriesList();
        const queriesUpdated = queriesList.filter((q => !ids.includes(q.id)));
        await storage.prune({
            queriesIdList: queriesUpdated.map((q => q.id))
        });
        return storage.setLocal({
            queriesList: queriesUpdated
        });
    },
    async removeNotificationData(id) {
        const prev = await storage.getNotificationsData();
        const notifications = prev.filter((n => n.id !== id));
        return storage.setLocal({
            notifications: notifications
        });
    },
    async prune({subIdList: subIdList, queriesIdList: queriesIdList}) {
        if (subIdList) {
            const subs = await storage.getSubredditData();
            if (subs) return storage.setLocal({
                subreddits: filterKeys(subIdList, subs)
            });
        }
        if (queriesIdList) {
            const queries = await storage.getQueriesData();
            if (queries) return storage.setLocal({
                queries: filterKeys(queriesIdList, queries)
            });
        }
    },
    async countNumberOfUnreadItems(updateBadge = true) {
        var _a, _b;
        let count = 0;
        const {subredditList: subredditList, queriesList: queriesList, queries: queries, subreddits: subreddits, accounts: accounts, usersList: usersList, mail: mail} = await storage.getAllData();
        if (subreddits) subredditList == null ? void 0 : subredditList.forEach((s => {
            var _a2, _b2;
            count += ((_b2 = (_a2 = subreddits[s.id]) == null ? void 0 : _a2.posts) == null ? void 0 : _b2.length) || 0;
        }));
        if (queries) queriesList == null ? void 0 : queriesList.forEach((q => {
            var _a2, _b2;
            count += ((_b2 = (_a2 = queries[q.id]) == null ? void 0 : _a2.posts) == null ? void 0 : _b2.length) || 0;
        }));
        usersList == null ? void 0 : usersList.forEach((u => {
            var _a2;
            count += ((_a2 = u.data) == null ? void 0 : _a2.length) || 0;
        }));
        count += ((_a = mail == null ? void 0 : mail.messages) == null ? void 0 : _a.length) || 0;
        (_b = Object.values(accounts || {})) == null ? void 0 : _b.forEach((a => {
            var _a2, _b2;
            count += ((_b2 = (_a2 = a.mail) == null ? void 0 : _a2.messages) == null ? void 0 : _b2.length) || 0;
        }));
        if (updateBadge) await browser.action.setBadgeText({
            text: count ? String(count) : ""
        });
        return count;
    }
};

const session = {
    async saveRateLimits(rateLimits) {
        const session2 = browser.storage.session;
        if (!session2) return;
        void session2.set({
            rateLimits: rateLimits
        });
    },
    async getRateLimits() {
        const session2 = browser.storage.session;
        const defaults = {
            remaining: null,
            reset: null,
            used: null
        };
        if (!session2) return defaults;
        const {rateLimits: rateLimits} = await session2.get({
            rateLimits: defaults
        });
        return rateLimits;
    }
};

const defaultState = {
    ...dataFields,
    isLoaded: false
};

const isUpdating = readable(false, (set => {
    listenForMessages("popup");
    onMessage("UPDATING_START", (() => {
        set(true);
        void nProgress.start();
    }));
    onMessage("UPDATING_END", (() => {
        set(false);
        void nProgress.done();
    }));
}));

const storageData = writable(defaultState, (() => {
    void storage.getAllData().then((data => {
        storageData.update((prev => ({
            ...prev,
            ...data,
            isLoaded: true
        })));
    }));
    const listener2 = changes => {
        const obj = {};
        Object.keys(changes).forEach((changeKey => {
            var _a;
            obj[changeKey] = (_a = changes[changeKey]) == null ? void 0 : _a.newValue;
        }));
        storageData.update((prev => ({
            ...prev,
            ...obj
        })));
    };
    browser.storage.onChanged.addListener(listener2);
    return () => {
        browser.storage.onChanged.removeListener(listener2);
    };
}));

function getMsg(msg, substitutions) {
    return browser.i18n.getMessage(msg, substitutions);
}

function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
}

function quadOut(t) {
    return -t * (t - 2);
}

function flip(node, {from: from, to: to}, params = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
    const dx = from.left + from.width * ox / to.width - (to.left + ox);
    const dy = from.top + from.height * oy / to.height - (to.top + oy);
    const {delay: delay = 0, duration: duration = (d => Math.sqrt(d) * 120), easing: easing = cubicOut} = params;
    return {
        delay: delay,
        duration: is_function(duration) ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
        easing: easing,
        css: (t, u) => {
            const x = u * dx;
            const y = u * dy;
            const sx = t + u * from.width / to.width;
            const sy = t + u * from.height / to.height;
            return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx}, ${sy});`;
        }
    };
}

function fade(node, {delay: delay = 0, duration: duration = 400, easing: easing = identity} = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay: delay,
        duration: duration,
        easing: easing,
        css: t => `opacity: ${t * o}`
    };
}

function slide(node, {delay: delay = 0, duration: duration = 400, easing: easing = cubicOut, axis: axis = "y"} = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? [ "top", "bottom" ] : [ "left", "right" ];
    const capitalized_secondary_properties = secondary_properties.map((e => `${e[0].toUpperCase()}${e.slice(1)}`));
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(style[`border${capitalized_secondary_properties[0]}Width`]);
    const border_width_end_value = parseFloat(style[`border${capitalized_secondary_properties[1]}Width`]);
    return {
        delay: delay,
        duration: duration,
        easing: easing,
        css: t => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
    };
}

function formatError(e) {
    return e ? `Fetch error: ${e.error || ""} ${e.message || ""} ${e.reason ? `(${e.reason})` : ""}` : "";
}

let listenerAdded = false;

const themeToClassMap = {
    dark: "dark-theme",
    purple: "purple-theme"
};

function setClasses(theme) {
    const toRemove = Object.keys(themeToClassMap).filter((t => t !== theme)).map((t => themeToClassMap[t]));
    document.body.classList.remove(...toRemove);
    const toAdd = themeToClassMap[theme];
    if (toAdd) document.body.classList.add(toAdd);
}

async function setIcons({isDark: isDark}) {
    const iconPaths = isDark ? {
        16: "../../images/icon-16-light.png",
        32: "../../images/icon-32-light.png",
        64: "../../images/icon-64-light.png"
    } : {
        16: "../../images/icon-16.png",
        32: "../../images/icon-32.png",
        64: "../../images/icon-64.png"
    };
    return browser.action.setIcon({
        path: iconPaths
    });
}

function toggleTheme(theme, mql) {
    let isDark = false;
    switch (theme) {
      case "light":
        isDark = false;
        break;

      case "purple":
      case "dark":
        isDark = true;
        break;

      default:
        isDark = mql.matches;
        theme = isDark ? "dark" : "light";
    }
    setClasses(theme);
    void setIcons({
        isDark: isDark
    });
    void storage.saveOptions({
        iconTheme: isDark ? "dark" : "light"
    });
}

async function applyTheme(theme) {
    if (!theme) {
        const opts = await storage.getOptions();
        theme = opts.theme;
    }
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(preferDarkQuery);
    toggleTheme(theme, mql);
    if (!listenerAdded) {
        mql.addEventListener("change", (e => void storage.getOptions().then((opts => toggleTheme(opts.theme, e)))));
        listenerAdded = true;
    }
}

export { add_transform as $, mount_component as A, destroy_component as B, component_subscribe as C, storageData as D, isUpdating as E, null_to_empty as F, noop as G, SettingsIcon as H, storage as I, sendMessage as J, HtmlTag as K, quadOut as L, onMount as M, binding_callbacks as N, OpenInNew as O, src_url_equal as P, RedditObjectKind as Q, RefreshIcon as R, SvelteComponent as S, is_function as T, ensure_array_like as U, update_keyed_each as V, fix_and_outro_and_destroy_block as W, add_render_callback as X, create_bidirectional_transition as Y, slide as Z, fix_position as _, insert as a, create_animation as a0, flip as a1, create_out_transition as a2, CheckMarkIcon as a3, WarningIcon as a4, FilterOnIcon as a5, NotifyOffIcon as a6, NotifyIcon as a7, constructUrl as a8, getItemTitle as a9, to_number as aA, select_option as aB, DEFAULT_OPTIONS as aC, select_value as aD, action_destroyer as aE, assign as aF, set_attributes as aG, compute_rest_props as aH, exclude_internal_props as aI, mapObjToQueryStr as aJ, generateId as aK, filterPostDataProperties as aL, getAccountByScope as aM, set_store_value as aN, debounce as aO, testMultireddit as aP, fade as aQ, tick as aR, construct_svelte_component as aS, stop_propagation as aa, prevent_default as ab, idToUserIdx as ac, getSubredditUrl as ad, formatError as ae, getSearchQueryUrl as af, getUserProfileUrl as ag, outro_and_destroy_block as ah, applyTheme as ai, nProgress as aj, is_promise as ak, get_current_component as al, set_current_component as am, flush as an, derived as ao, session as ap, onMessage as aq, writable as ar, listenForMessages as as, destroy_each as at, init_binding_group as au, set_input_value as av, bind as aw, add_flush_callback as ax, run_all as ay, getRedditBaseUrl as az, browser as b, check_outros as c, transition_in as d, empty as e, detach as f, group_outros as g, bubble as h, init as i, create_slot as j, element as k, space as l, attr as m, toggle_class as n, append as o, listen as p, get_all_dirty_from_scope as q, get_slot_changes as r, safe_not_equal as s, transition_out as t, update_slot_base as u, text as v, set_data as w, getMsg as x, create_component as y, getInboxUrl as z };
